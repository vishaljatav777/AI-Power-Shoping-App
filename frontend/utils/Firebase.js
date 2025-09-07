// Import the functions you need from the SDKs you need
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwhbQgoZvxlleVXriHS83-mfgLQIYXnqY',
  authDomain: "login-one-cart-11f53.firebaseapp.com",
  projectId: "login-one-cart-11f53",
  storageBucket: "login-one-cart-11f53.firebasestorage.app",
  messagingSenderId: "757296980266",
  appId: "1:757296980266:web:06ab1c2f9a7b10ade37e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}


