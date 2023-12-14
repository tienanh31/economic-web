// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr_ARa90ON4KdrYDXkgvKa2P4ZHdJZrDE",
  authDomain: "economic-web-c349b.firebaseapp.com",
  databaseURL: "https://economic-web-c349b-default-rtdb.firebaseio.com",
  projectId: "economic-web-c349b",
  storageBucket: "economic-web-c349b.appspot.com",
  messagingSenderId: "701445372761",
  appId: "1:701445372761:web:5714b36009699b1672ea48",
  measurementId: "G-BY5BB6G2HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
