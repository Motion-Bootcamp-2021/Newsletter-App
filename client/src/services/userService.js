import request from './requester';
import firebase from '../firebase';
import { SERVER_ADDRESS, DOMAIN_ADDRESS } from '../env';
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signUp = (data) => {
    return request.post(`${SERVER_ADDRESS}/user/signup`, data);
}

export const createEmailMask = (username, idToken) => {
    const emailMask = `${username}@letterbox.io`;
    return request.post(`${SERVER_ADDRESS}/user/createemailmask`, { emailMask }, idToken);
}

export const signOut = () => {
    return firebase.auth().signOut();
}

export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const googleSignIn = (history) => {
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {

            if (res.additionalUserInfo.isNewUser) {

                const email = res.additionalUserInfo.profile.email;
                const firstName = res.additionalUserInfo.profile.given_name;
                const lastName = res.additionalUserInfo.profile.family_name;

                res.user.getIdToken()
                    .then(idToken => {
                        createDbUser({ email, firstName, lastName }, idToken)
                            .then(res => res.json())
                            .then(data => {
                                if (data.error) {
                                    throw data.error;
                                }

                                history.push('/onboarding');
                            })
                            .catch(err => alert(err.message));

                    })
                    .catch(err => console.log(err));
            } else {
                history.push('/');
            }

        })
        .catch(err => alert(err));
}

export const facebookSignIn = (history) => {
    return firebase.auth().signInWithPopup(facebookProvider)
        .then(res => {

            if (res.additionalUserInfo.isNewUser) {

                const email = res.additionalUserInfo.profile.email;
                const firstName = res.additionalUserInfo.profile.first_name;
                const lastName = res.additionalUserInfo.profile.last_name;

                res.user.getIdToken()
                    .then(idToken => {
                        createDbUser({ email, firstName, lastName }, idToken)
                            .then(res => res.json())
                            .then(data => {
                                if (data.error) {
                                    throw data.error;
                                }

                                history.push('/onboarding');
                            })
                            .catch(err => alert(err.message));

                    })
                    .catch(err => console.log(err));
            } else {
                history.push('/');
            }
        })
        .catch(err => alert(err));
}

export const createDbUser = (data, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/createdbuser`, data, idToken);
}


export const subscribe = async (email) => {
    const data = await request.post(`${SERVER_ADDRESS}/user/subscribe`, { email });

    return data;
}

export const createLabel = (label, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/create-label`, { label }, idToken);
}

export const getLabels = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/user/get-labels`, null, idToken);
}

export const resetPassword = (email) => {
    const actionCodeSettings = {
        url: `${DOMAIN_ADDRESS}/signin`
    };

    return firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
        .then(() => {
            return 'success';
        })
        .catch(err => {
            return err.code;
        });
}

export const markNewsReadLater = (selectedNews, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/readlater`, { selectedNews }, idToken)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                throw data.error
            }
            return data;
        })
        .catch(err => alert(err));
}

export const getReadLaterNews = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/user/readlater`, null, idToken);
}