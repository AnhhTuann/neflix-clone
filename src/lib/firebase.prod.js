// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { seedDatabase } from "../seed";

const firebase = initializeApp({
  apiKey: "AIzaSyA8CyrLnCPyTSeSC1wJULAtTlk4v4Heceg",
  authDomain: "netflix-clone-59e2a.firebaseapp.com",
  projectId: "netflix-clone-59e2a",
  storageBucket: "netflix-clone-59e2a.appspot.com",
  messagingSenderId: "950117145407",
  appId: "1:950117145407:web:0d8ffa21b8171460b7518a",
  measurementId: "G-6PR7BKWH1N",
});

export const db = getFirestore();
export const auth = getAuth();
// seedDatabase(firebase);

export { firebase };
