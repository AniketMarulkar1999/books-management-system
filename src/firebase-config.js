// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPNTwNU3LpWMp7d3SuVW15wr3FBZX1BWI",
  authDomain: "books-management-1a663.firebaseapp.com",
  projectId: "books-management-1a663",
  storageBucket: "books-management-1a663.appspot.com",
  messagingSenderId: "674905300197",
  appId: "1:674905300197:web:ea276e27aa97cb6388480c",
  measurementId: "G-QVPL7NYRDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);