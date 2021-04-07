import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeeds } from '../../actions/feedActions';

import MainLayout from '../layouts/MainLayout';
import Feed from './Feed';
import ExploreFeedsFooter from './ExploreFeedsFooter';
import './ExploreFeeds.scss';

const ExploreFeeds = ({ user, feeds, getFeeds }) => {
    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then((idToken) => getFeeds(idToken))
                .catch(console.log);
        }
    }, [user, getFeeds]);

    return (
        <MainLayout>
            <div className="view-container">
                <h1>Feeds</h1>
                <h2>All</h2>

                <div className="feeds-container">
                    {feeds.map((f) => (
                        <Feed key={f._id} id={f._id} name={f.name} sources={f.newsletters.length} img=""></Feed>
                    ))}
                </div>

                <ExploreFeedsFooter />
            </div>
        </MainLayout>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    feeds: state.feed.feeds,
});

const mapDispatchToProps = {
    getFeeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFeeds);
