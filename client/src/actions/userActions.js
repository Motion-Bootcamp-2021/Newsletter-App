import { LOGIN } from './actionTypes';

export const login = (userData) => ({
    type: LOGIN,
    payload: userData,
})