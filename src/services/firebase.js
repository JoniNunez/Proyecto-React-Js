import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbTZIPkgPRMUNSpjCgG2CQSje9rglob6s",
    authDomain: "proyecto-final-reactjs-f03a7.firebaseapp.com",
    projectId: "proyecto-final-reactjs-f03a7",
    storageBucket: "proyecto-final-reactjs-f03a7.appspot.com",
    messagingSenderId: "167968584172",
    appId: "1:167968584172:web:8934aadbf108eef9a090c9"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);