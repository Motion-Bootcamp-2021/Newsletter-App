import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../../actions/feedActions';
import MainLayout from '../layouts/MainLayout/MainLayout';
import NewsletterList from './NewsletterList/NewsletterList';
import './SingleFeed.scss';

const SingleFeed = ({ user, feed, getFeed, match }) => {
    const _id = match.params.feedId;
    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then((idToken) => getFeed(_id, idToken))
                .catch((err) => console.log(err));
        }
    }, [user, getFeed, _id]);

    return (
        <MainLayout>
            <div className="single-feed-wrapper">
                <div className="feed-header">
                    <h1 className="feed-title">{feed.name}</h1>

                    <button className="feed-filter">All</button>
                </div>

                <NewsletterList newsletters={feed.newsletters} />
            </div>
        </MainLayout>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    feed: state.feed.feed,
});

const mapDispatchToProps = {
    getFeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleFeed);
