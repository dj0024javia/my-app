import * as firebase from 'firebase';
import firestore from 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8jSK0RD9jB82HFeo_fjEpCwpW5CgltAs",
    authDomain: "interview-app-addon.firebaseapp.com",
    databaseURL: "https://interview-app-addon.firebaseio.com",
    projectId: "interview-app-addon",
    storageBucket: "interview-app-addon.appspot.com",
    messagingSenderId: "286460223575",
    appId: "1:286460223575:web:d94dc47d19d28086b78312",
    measurementId: "G-4B69KX9S5D"
};

// if (!firebase.apps.length) {
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// }

export default db;