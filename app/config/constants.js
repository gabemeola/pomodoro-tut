import firebase from 'firebase';
import { firebaseConfig } from './privates.private';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth();
export const facebookProvider = firebase.auth.FacebookAuthProvider;