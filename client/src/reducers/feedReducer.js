import {
    GET_ALL_FEEDS,
    GET_FEED,
    ADD_NEWSLETTER,
    REMOVE_NEWSLETTER
} from '../actions/actionTypes';


const initialState = {
    feed: {
        name: '',
        newsletters: [],
    },
    feeds: [],
};

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FEED:
            return {
                ...state,
                feed: action.payload,
            };
        case GET_ALL_FEEDS:
            return {
                ...state,
                feeds: action.payload,
            };
        case ADD_NEWSLETTER:
            return {
                ...state,
                feed: {
                    ...state.feed,
                    newsletters: [...state.feed.newsletters, action.payload]
                }
            }
        case REMOVE_NEWSLETTER:
            return {
                ...state,
                feed: {
                    ...state.feed,
                    newsletters: state.feed.newsletters.filter(x => x._id !== action.payload)
                }
            }
        default:
            return { ...state };
    }
};

export default feedReducer;
