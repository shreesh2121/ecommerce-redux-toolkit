// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import {getFirestore} from "firebase/firestore"
// import {getStorage} from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyCIQksAaWr8juUy1dWtNXOYbUXbKpdwpvA",
  authDomain: "ecommerce-auth-c8e3c.firebaseapp.com",
  projectId: "ecommerce-auth-c8e3c",
  storageBucket: "ecommerce-auth-c8e3c.appspot.com",
  messagingSenderId: "148370087553",
  appId: "1:148370087553:web:3bd45fe6d09300dd65f780"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


