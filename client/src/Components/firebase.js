import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8_HlIyyBRULB11bNDh4zbz3TLbOWDB3M",
  authDomain: "laugh-with-friends.firebaseapp.com",
  projectId: "laugh-with-friends",
  storageBucket: "laugh-with-friends.appspot.com",
  messagingSenderId: "473588931542",
  appId: "1:473588931542:web:57fa0fcd8bcbd5bbe76277",
  measurementId: "G-J26E7YNLGM",
});

const db = firebaseApp.firestore();

export default db;
