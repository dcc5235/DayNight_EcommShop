import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDirCdiw9wJEwspaoLMrO_2Cn34FSc4BsE",
  authDomain: "homecomforts-4f17d.firebaseapp.com",
  projectId: "homecomforts-4f17d",
  storageBucket: "homecomforts-4f17d.appspot.com",
  messagingSenderId: "140861116126",
  appId: "1:140861116126:web:42572af1265373cdfdbc4f",
  measurementId: "G-86LB6M44J4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger Google pop up for user auth
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
