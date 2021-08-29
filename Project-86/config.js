import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyABshXGCzNZN6eAGwMtx9evl3XrmVLjOsY",
  authDomain: "borrow-to-capture.firebaseapp.com",
  projectId: "borrow-to-capture",
  storageBucket: "borrow-to-capture.appspot.com",
  messagingSenderId: "71408484202",
  appId: "1:71408484202:web:a19ec4bd76b74a38d66f13"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
