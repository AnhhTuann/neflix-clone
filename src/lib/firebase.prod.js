// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { seedDatabase } from "../seed";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDJD_QkcBVRNorxs5DgxwtpbUKqkngdkHI",
  authDomain: "netflix-clone-7a099.firebaseapp.com",
  projectId: "netflix-clone-7a099",
  storageBucket: "netflix-clone-7a099.appspot.com",
  messagingSenderId: "488928943570",
  appId: "1:488928943570:web:73f1e0f125576a55d4fc0b",
  measurementId: "G-GJYKB2QG1Q",
});

export const db = getFirestore();
seedDatabase(firebaseApp);
export { firebaseApp };
