import {
    SIGNIN,
    SIGNOUT,
    VERIFY,
    CREAT_EMAIL_MASK,
    GET_READ_LATER,
    MARK_AS_READ
} from '../actions/actionTypes';

const initialState = {
    user: null,
    emailMask: '',
    readLaterNews: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                user: action.payload.user,
                emailMask: action.payload.emailMask,
            }
        case SIGNOUT:
            return {
                ...initialState
            }
        case VERIFY:
            return {
                ...state
            }
        case CREAT_EMAIL_MASK:
            return {
                ...state,
                emailMask: action.payload.emailMask,
            }
        case GET_READ_LATER:
            return {
                ...state,
                readLaterNews: action.payload
            }
        case MARK_AS_READ:
            return {
                ...state,
                readLaterNews: state.readLaterNews.filter(x => !action.payload.includes(x._id))
            }
        default:
            return {
                ...state
            }
    }
}

export default userReducer;