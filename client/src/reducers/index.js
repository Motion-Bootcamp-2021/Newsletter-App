import { combineReducers } from 'redux';
import user from './userReducer';
import newsletter from './newsletterReducer';

const rootReducer = combineReducers ({
    user,
    newsletter
})

export default rootReducer;