import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwJEjhvRQrxj5sbaTZGKlJ_FZVksipDhs",
    authDomain: "books-db-a0f6c.firebaseapp.com",
    databaseURL: "https://books-db-a0f6c.firebaseio.com",
    projectId: "books-db-a0f6c",
    storageBucket: "books-db-a0f6c.appspot.com",
    messagingSenderId: "972608554458",
    appId: "1:972608554458:web:b0a57b5cf6b2ec18356ce3",
    measurementId: "G-JYZF5FL22D"
  };

firebase.initializeApp(config);

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;