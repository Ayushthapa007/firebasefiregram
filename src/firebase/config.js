import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBN09UZTdzC5HnuvqrgxOU44VaG0DQEQHg",
  authDomain: "ayush-firegram.firebaseapp.com",
  projectId: "ayush-firegram",
  storageBucket: "ayush-firegram.appspot.com",
  messagingSenderId: "144520329229",
  appId: "1:144520329229:web:f1bac6d5786b22ae1cbd44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };