import './Feed.scss';

const Feed = ({ feedTitle, feedCounter }) => {
    return (
        <div className="feed">
            <span className="feed-title">{feedTitle}</span>
            <span className="feed-counter">{feedCounter}</span>
        </div>
    );
}

export default Feed;