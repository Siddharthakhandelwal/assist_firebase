import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBGy0oP7xltvRrPeHKoAQ1AywxZVqHHzPg",
  authDomain: "assist-445407.firebaseapp.com",
  projectId: "assist-445407",
  storageBucket: "assist-445407.firebasestorage.app",
  messagingSenderId: "620264494387",
  appId: "1:620264494387:web:ac22c3b136d131b9b4da46",
  measurementId: "G-8L3EF964SG",
  databaseURL: "https://assist-445407-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
