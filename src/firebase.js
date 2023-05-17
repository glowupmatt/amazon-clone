import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs1jVbEtwWuGZk02TxYQ1fwpwV1CralDg",
  authDomain: "clone-80f9d.firebaseapp.com",
  projectId: "clone-80f9d",
  storageBucket: "clone-80f9d.appspot.com",
  messagingSenderId: "407321017519",
  appId: "1:407321017519:web:a14b23898612305eeda85a",
  measurementId: "G-PCGH0NE31W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
