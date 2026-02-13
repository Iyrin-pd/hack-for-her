// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmAZAdEFA7NyRMnSS6UNY0quoqaJX4dRM",
    authDomain: "shii-f9894.firebaseapp.com",
    projectId: "shii-f9894",
    storageBucket: "shii-f9894.firebasestorage.app",
    messagingSenderId: "930298663839",
    appId: "1:930298663839:web:8fc36962f1e3cf1edb23aa",
    measurementId: "G-J6PYM5R9M3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
