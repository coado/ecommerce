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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        // document reference
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        // reads document
        const snapShot = await userRef.get();   
        // checking if user already exists.
        if (!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();

                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                } catch (error) {
                        console.log('error creating user', error.message);
                } 
        }
        return userRef;
}

// we did it only once, just for pulling shop data into firebase
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
        const collectionRef = firestore.collection(collectionKey);
        // batch group all our calls
        // we dont have to call them individualy
        const batch = firestore.batch();
        objectsToAdd.forEach(obj => {
                const newDocRef = collectionRef.doc();
                batch.set(newDocRef, obj);
        });
        // fire off batch request.
        // returning promise
        return await batch.commit();
}


firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map(doc => {
                const {title, items} = doc.data();
                return {
                                // changes string to URL that program can read
                                // removing spaces, characters etc.
                        routeName: encodeURI(title.toLowerCase()),
                        id: doc.id,
                        title,
                        items
                }
        });
        // changing array into one big object
        return transformedCollection.reduce((accumulator, collection) => {
                accumulator[collection.title.toLowerCase()] = collection;
                return accumulator;
        }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;