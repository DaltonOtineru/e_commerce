// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration //
const firebaseConfig = {
  apiKey: 'AIzaSyAMFf9DtLqbJ0eIo4Zl02SHT-lyfkg7-no',
  authDomain: 'e-commerce-6a80e.firebaseapp.com',
  projectId: 'e-commerce-6a80e',
  storageBucket: 'e-commerce-6a80e.appspot.com',
  messagingSenderId: '345950290500',
  appId: '1:345950290500:web:dfcf39d76b160657a57211',
  measurementId: 'G-Z3ZRV38RKG',
};

// Initialize Firebase //
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
