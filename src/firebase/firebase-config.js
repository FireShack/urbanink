// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-X_Lb6xEVpfNiDvZB7XB2a6ZNpmEdels",
  authDomain: "urban-ink.firebaseapp.com",
  projectId: "urban-ink",
  storageBucket: "urban-ink.appspot.com",
  messagingSenderId: "68058345251",
  appId: "1:68058345251:web:98748e440461d479bd6696",
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const googleAuth = new GoogleAuthProvider();
