import MainLayout from '../layouts/MainLayout';
import Feed from './Feed';
import ExploreFeedsFooter from './ExploreFeedsFooter';
import './ExploreFeeds.scss';

const ExploreFeeds = () => {
    return (
        <MainLayout>
            <div className="view-container">
                <h1>Feeds</h1>
                <h2>All</h2>

                <div className="feeds-container">
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                </div>

                <ExploreFeedsFooter />
            </div>
        </MainLayout>
    );
};

export default ExploreFeeds;
