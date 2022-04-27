// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
// } from 'firebase/auth';
// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from 'firebase/firestore';
// import firebase from 'firebase/app';

// // Firebase configuration //
// const firebaseConfig = {
//   apiKey: 'AIzaSyAMFf9DtLqbJ0eIo4Zl02SHT-lyfkg7-no',
//   authDomain: 'e-commerce-6a80e.firebaseapp.com',
//   projectId: 'e-commerce-6a80e',
//   storageBucket: 'e-commerce-6a80e.appspot.com',
//   messagingSenderId: '345950290500',
//   appId: '1:345950290500:web:dfcf39d76b160657a57211',
//   measurementId: 'G-Z3ZRV38RKG',
// };

// // Initialize Firebase //
// const analytics = getAnalytics(app);
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, 'users'), where('uid', '==', user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, 'users'), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: 'google',
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     alert(err.message);
//   }
// };

// const logInWithEmailAndPassword = async () => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const registerWithEmailAndPassword = async () => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, 'users'), {
//       uid: user.uid,
//       name,
//       authProvider: 'local',
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
