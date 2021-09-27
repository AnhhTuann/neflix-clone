// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { seedDatabase } from "../seed";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBjBAKAMcOxlTMXGx8OfqVwDevp-YTO_og",
  authDomain: "netflix-clone-b0d3c.firebaseapp.com",
  projectId: "netflix-clone-b0d3c",
  storageBucket: "netflix-clone-b0d3c.appspot.com",
  messagingSenderId: "568275250235",
  appId: "1:568275250235:web:5baf9faeee0c38cffe801e",
  measurementId: "G-T508B4ZY2K",
});

export const db = getFirestore();

seedDatabase(firebaseApp);

export { firebaseApp };
