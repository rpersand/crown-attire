import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvXMvdkOKgRDDz5R1TdLjctnuLY3qn4Ww",
    authDomain: "crown-attire.firebaseapp.com",
    projectId: "crown-attire",
    storageBucket: "crown-attire.appspot.com",
    messagingSenderId: "97067278682",
    appId: "1:97067278682:web:5de16e46d74c417b139363",
    measurementId: "G-X81PF20XM1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;