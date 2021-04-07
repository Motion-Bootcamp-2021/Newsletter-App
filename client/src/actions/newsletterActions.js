import {
    GET_NEWSLETTER, 
    HIDE_NEWS
} from './actionTypes';

import {
    getOneNewsletter
} from '../services/newsletterService';

export const getNewsletterSuccess = (newsletter) => ({
    type: GET_NEWSLETTER,
    payload: newsletter
})

export const setHideNewsIdArray = (newsIdArrayToHide) => ({
    type: HIDE_NEWS,
    payload: newsIdArrayToHide
})

export const getNewsletter = (_id, idToken) => async (dispatch) => {
    try {
        const res = await getOneNewsletter(_id, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getNewsletterSuccess(data));
    } catch (error) {
        alert(error);
    }
}

