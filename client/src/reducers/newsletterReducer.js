import {
    GET_NEWSLETTER,
    HIDE_NEWS,
} from '../actions/actionTypes';

const initialState = {
    newsletter: {
        name: '',
        news: []
    },
    newsIdArrayToHide:null,
}
const newsletterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWSLETTER:
            return {
                ...state,
                newsletter: action.payload
            }
        case HIDE_NEWS:
            return {
                ...state,
                newsIdArrayToHide: action.payload
            }
        default:
            return state
    }
}

export default newsletterReducer;