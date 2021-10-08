import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "project-week3-b42ba.firebaseapp.com",
    projectId: "project-week3-b42ba",
    storageBucket: "project-week3-b42ba.appspot.com",
    messagingSenderId: "359008366890",
    appId: "1:359008366890:web:588c5d7799beefffd72e53",
    measurementId: "G-QVK11JDS9Y"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};