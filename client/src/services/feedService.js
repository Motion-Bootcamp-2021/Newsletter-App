import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const getOneFeed = (_id, idToken) => {
    return request.get(`${SERVER_ADDRESS}/feed/one?_id=${_id}`, null, idToken);
};

export const getAllFeeds = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/feed/all`, null, idToken);
};
