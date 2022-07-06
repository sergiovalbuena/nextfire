import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCRmOfzuuPha5wyUR3inA4ycsuNheDuq8s",
    authDomain: "blogapp-firebase-nextjs.firebaseapp.com",
    projectId: "blogapp-firebase-nextjs",
    storageBucket: "blogapp-firebase-nextjs.appspot.com",
    messagingSenderId: "505224352415",
    appId: "1:505224352415:web:2e35a49cbb3789b61048aa",
    measurementId: "G-T18H40K55P"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();