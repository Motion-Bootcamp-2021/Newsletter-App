import { GET_FEED, GET_ALL_FEEDS } from './actionTypes';

import { getOneFeed, getAllFeeds } from '../services/feedService';

export const getFeedSuccess = (feed) => ({
    type: GET_FEED,
    payload: feed,
});

export const getAllFeedsSuccess = (feeds) => ({
    type: GET_ALL_FEEDS,
    payload: feeds,
});


export const getFeed = (_id, idToken) => async (dispatch) => {
    try {
        const res = await getOneFeed(_id, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getFeedSuccess(data));
    } catch (error) {
        alert(error);
    }
};

export const getFeeds = (idToken) => async (dispatch) => {
    try {
        const res = await getAllFeeds(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getAllFeedsSuccess(data));
    } catch (error) {
        alert(error);
    }
};

