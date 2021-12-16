import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA153fqmQnTlgf7c1-JO4ug4NyVF4GmQpA",
    authDomain: "crwn-db-fe7bb.firebaseapp.com",
    projectId: "crwn-db-fe7bb",
    storageBucket: "crwn-db-fe7bb.appspot.com",
    messagingSenderId: "212799730293",
    appId: "1:212799730293:web:3386c20b7b61d3c11cfe3c",
    measurementId: "G-W8XN0NQCYB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = app.auth();
const firestore = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"})
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, firestore, signInWithGoogle }