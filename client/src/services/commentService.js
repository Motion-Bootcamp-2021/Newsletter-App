import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const createComment = (content, rating, idToken, newsId) => {
    return request.post(`${SERVER_ADDRESS}/comment`, {content, rating, newsId}, idToken);
}
