// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");
const firebaseConfig = {
  apiKey: "AIzaSyA368HX1GX-x1ZB7PRzeWoZOmZPLJNU9xM",
  authDomain: "clone-1acb7.firebaseapp.com",
  projectId: "clone-1acb7",
  storageBucket: "clone-1acb7.appspot.com",
  messagingSenderId: "1048360050052",
  appId: "1:1048360050052:web:d4d5e586de4159cb0bd1d1",
  measurementId: "G-7CF0C2S3HT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
