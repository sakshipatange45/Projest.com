// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADhbCaoj4-DHvzfA7SBo0kM6bYO1hi-Ww",
  authDomain: "blog-f8d71.firebaseapp.com",
  projectId: "blog-f8d71",
  storageBucket: "blog-f8d71.firebasestorage.app",
  messagingSenderId: "88747394958",
  appId: "1:88747394958:web:dab11d50a99c749fc906df",
  measurementId: "G-Y7BSJTF0FC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };