import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDHp--AzMfc-x67rmSXLtzwgYJowyEs6p0",
    authDomain: "newsletter-app-10766.firebaseapp.com",
    projectId: "newsletter-app-10766",
    storageBucket: "gs://newsletter-app-10766.appspot.com",
    messagingSenderId: "698723357675",
    appId: "1:698723357675:web:e1c4b34fb0fc7c16167fae"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}

export default firebase;