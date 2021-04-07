import { GET_ALL_FEEDS, GET_FEED } from '../actions/actionTypes';


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
        default:
            return { ...state };
    }
};

export default feedReducer;
