import { useState } from 'react';
import Feed from './Feed/Feed';
import './MyFeeds.scss';

const MyFeeds = () => {
    const [feeds, setFeeds] = useState([
        {
            _id: 0,
            feedTitle: 'Digital Marketing',
            feedCounter: 6,
        },
        {
            _id: 1,
            feedTitle: 'Technologies',
            feedCounter: 8,
        },
        {
            _id: 2,
            feedTitle: 'Business',
            feedCounter: 35,
        },
    ]);

    return (
        <div className="my-feeds">
            <span className="my-feeds-title">Feeds</span>

            {
            feeds
                .map((feed, index) => 
                        (
                            <Feed 
                                key={index}
                                feedTitle={feed.feedTitle}
                                feedCounter={feed.feedCounter}/>
                        )
                    )
            }

            <button className="my-feeds-show-more">show more</button>
        </div>
    );
}

export default MyFeeds;