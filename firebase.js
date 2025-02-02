// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
