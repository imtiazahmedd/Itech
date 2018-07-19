import * as firebase from 'firebase'
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyABnrgm892a7irrmui5Pp10e5wezjXEGH8",
    authDomain: "itech-139c0.firebaseapp.com",
    databaseURL: "https://itech-139c0.firebaseio.com",
    projectId: "itech-139c0",
    storageBucket: "",
    messagingSenderId: "254277030072"
};
firebase.initializeApp(config);

//Initialize Firestore
const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);



export default firebase;

