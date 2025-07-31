// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk_h7HAq4W9ZavKAezRs_4BFOfJmOcL6U",
  authDomain: "interview-42aa2.firebaseapp.com",
  projectId: "interview-42aa2",
  storageBucket: "interview-42aa2.appspot.com", 
  messagingSenderId: "893545544063",
  appId: "1:893545544063:web:42115c69c988377c95824a",
  measurementId: "G-0NRB2BQXG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;