import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE,
    authDomain: "project-ru-ced9e.firebaseapp.com",
    databaseURL: "https://project-ru-ced9e-default-rtdb.firebaseio.com",
    projectId: "project-ru-ced9e",
    storageBucket: "project-ru-ced9e.appspot.com",
    messagingSenderId: "299983148191",
    appId: "1:299983148191:web:b5f206497c9365f83bbeaa"
};

firebase.initializeApp(firebaseConfig);
