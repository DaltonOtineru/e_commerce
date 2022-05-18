// import firebase from 'firebase';
// // import 'firebase/auth';
// import { getAuth } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqF8gKAMlThISSbSqQ5z9gexpZ5Ub7aW8',
  authDomain: 'ecommercestore-21c16.firebaseapp.com',
  projectId: 'ecommercestore-21c16',
  storageBucket: 'ecommercestore-21c16.appspot.com',
  messagingSenderId: '268997532144',
  appId: '1:268997532144:web:8dc7c0cd1dfd64b55f2535',
  measurementId: 'G-D514NPHCBH',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// export { auth };
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
