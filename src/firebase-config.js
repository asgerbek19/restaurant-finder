// Daníel

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD060yEEW5IfcCR-aynzEeEZyGlIAaz2gk",
  authDomain: "muncho-91d98.firebaseapp.com",
  projectId: "muncho-91d98",
  storageBucket: "muncho-91d98.appspot.com",
  messagingSenderId: "1020605963235",
  appId: "1:1020605963235:web:50c325d7a770218a045ed6"
};

// Initialize Firebase first
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const usersRef = collection(db, "users");
export const restaurantsRef = collection(db, "restaurants");
export const favsRef = collection(db, "favorites");