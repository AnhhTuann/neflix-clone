import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase.prod";

export default async function useContent() {
  const docRef = doc(db, "series", "films");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
