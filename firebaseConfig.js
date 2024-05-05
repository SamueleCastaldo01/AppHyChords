// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDlK0vH8pkvreemQeIaKmdXRqXF4KEOpc",
  authDomain: "hychord-a8f1f.firebaseapp.com",
  projectId: "hychord-a8f1f",
  storageBucket: "hychord-a8f1f.appspot.com",
  messagingSenderId: "151731795379",
  appId: "1:151731795379:web:4471629871bbb1091487c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const dbFire = getFirestore(app);
export const storage = getStorage(app);