// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7KB3JUyzTr4YETYHxzofEpS4QdYhDXj4",
  authDomain: "garbage-collection-app-40823.firebaseapp.com",
  projectId: "garbage-collection-app-40823",
  storageBucket: "garbage-collection-app-40823.firebasestorage.app",
  messagingSenderId: "137528160089",
  appId: "1:137528160089:web:d63d45325b4acd49126648",
  measurementId: "G-BT0XG6Z5EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
