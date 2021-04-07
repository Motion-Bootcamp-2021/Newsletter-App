import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const getOneNewsletter = (_id, idToken) => {
    return request.get(`${SERVER_ADDRESS}/newsletter/one?_id=${_id}`, null, idToken);
}