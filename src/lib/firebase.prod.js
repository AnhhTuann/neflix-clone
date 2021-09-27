// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { seedDatabase } from "../seed";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAlu3ckJ_NeIoUj8HgPlpOEjc06L_3uLBE",
  authDomain: "netflix-clone-7e8c2.firebaseapp.com",
  projectId: "netflix-clone-7e8c2",
  storageBucket: "netflix-clone-7e8c2.appspot.com",
  messagingSenderId: "4610464854",
  appId: "1:4610464854:web:34bcc3310378c112446ff7",
});

export const db = getFirestore();

seedDatabase(firebaseApp);

export { firebaseApp };
