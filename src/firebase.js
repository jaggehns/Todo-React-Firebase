import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD082MERDLnqFIG2AEiBTI-dYxKD6my5oY",
  authDomain: "todo-react-firebase-4da50.firebaseapp.com",
  projectId: "todo-react-firebase-4da50",
  storageBucket: "todo-react-firebase-4da50.appspot.com",
  messagingSenderId: "857435238598",
  appId: "1:857435238598:web:7f4fe2236c5844a7ad67c7",
  measurementId: "G-SN7Z2TELMQ",
});

const db = firebaseApp.firestore();

export default db;
