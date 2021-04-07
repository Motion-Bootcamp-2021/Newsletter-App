import MainLayout from '../layouts/MainLayout/MainLayout';
import NewsletterList from './NewsletterList/NewsletterList';
import './SingleFeed.scss';

const SingleFeed = () => {
    return (
        <MainLayout>
            <div className="single-feed-wrapper">
                <div className="feed-header">
                    <h1 className="feed-title">Technologies</h1>

                    <button className="feed-filter">All</button>
                </div>

                <NewsletterList/>
            </div>
        </MainLayout>
    );
}

export default SingleFeed;