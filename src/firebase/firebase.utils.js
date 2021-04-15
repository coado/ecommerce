import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDxsm1So67ZdXTiZwhSb6214sxLnb5wRc4",
        authDomain: "crwn-db-60cb3.firebaseapp.com",
        projectId: "crwn-db-60cb3",
        storageBucket: "crwn-db-60cb3.appspot.com",
        messagingSenderId: "193204417597",
        appId: "1:193204417597:web:f21d0598762fabbbaa6654",
        measurementId: "G-MFEV7FJ8RZ"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;