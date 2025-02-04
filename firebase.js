// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANWP_FEg53iNRDbnAs3Tru5sETrbvNrWw",
  authDomain: "frontendassignment-f8eaa.firebaseapp.com",
  projectId: "frontendassignment-f8eaa",
  storageBucket: "frontendassignment-f8eaa.firebasestorage.app",
  messagingSenderId: "354543931188",
  appId: "1:354543931188:web:c239657f0741e3deccdf61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


