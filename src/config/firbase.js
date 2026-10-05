// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBKisJj5qGiwDfmnWoFJKk0_h4ayYCe7wk",
  authDomain: "book-shoping-e1fa7.firebaseapp.com",
  projectId: "book-shoping-e1fa7",
  storageBucket: "book-shoping-e1fa7.firebasestorage.app",
  messagingSenderId: "1053449902115",
  appId: "1:1053449902115:web:52288d871d4e64ec67f996",
  measurementId: "G-BQKXEDL4YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth