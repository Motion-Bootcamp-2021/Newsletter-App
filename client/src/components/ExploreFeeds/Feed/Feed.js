import './Feed.scss';

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="img-container">
                <img
                    src="https://img.freepik.com/free-photo/notebook-with-words-online-marketing-cup-coffee_1134-438.jpg?size=626&ext=jpg"
                    alt=""
                ></img>
            </div>

            <div className="props-container">
                <h3>Digital Marketing</h3>
                <p>320 sources</p>
            </div>
        </div>
    );
};

export default Feed;
