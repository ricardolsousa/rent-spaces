// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQJdrmS7BP-libheLK-BPvSDh0Z3-SKqw",
  authDomain: "rent-spaces-e5f5d.firebaseapp.com",
  projectId: "rent-spaces-e5f5d",
  storageBucket: "rent-spaces-e5f5d.firebasestorage.app",
  messagingSenderId: "626421544376",
  appId: "1:626421544376:web:0999279961592f146a0b4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
