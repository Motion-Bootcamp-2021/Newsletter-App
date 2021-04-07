import { useHistory } from 'react-router-dom';

import './Feed.scss';

const Feed = ({ id, name, sources }) => {
    const history = useHistory();
    const url = `/feed/${id}`;

    const redirectToSignleFeed = () => {
        history.push(url);
    };

    return (
        <div className="feed-container" onClick={() => redirectToSignleFeed()}>
            <div className="img-container">
                <img src="https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png" alt="logo"></img>
            </div>

            <div className="props-container">
                <h3>{name}</h3>
                <p>{sources} sources</p>
            </div>
        </div>
    );
};

export default Feed;
