import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyBQqwPApfkzC_xgRnkQaL6HToTwWVsGnFM",
    authDomain: "babysoap-62119.firebaseapp.com",
    projectId: "babysoap-62119",
    storageBucket: "babysoap-62119.appspot.com",
    messagingSenderId: "642293018852",
    appId: "1:642293018852:web:966010f99915f807f1bcf1"
 

});

var db = firebaseApp.firestore();

export { db };