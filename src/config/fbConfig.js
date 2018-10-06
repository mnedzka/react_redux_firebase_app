import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA9F0wu-BLN1wpURgxGa0xzhPt5H-012gM",
  authDomain: "net-ninja-marioplan-4c3bb.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-4c3bb.firebaseio.com",
  projectId: "net-ninja-marioplan-4c3bb",
  storageBucket: "net-ninja-marioplan-4c3bb.appspot.com",
  messagingSenderId: "206802516809"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
