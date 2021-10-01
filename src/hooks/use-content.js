import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase.prod";
import { useEffect, useState } from "react";
export default function useContent(target) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function readFile() {
      const querySnapshot = await getDocs(collection(db, target));

      const Doc = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContent(Doc);
    }
    readFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { [target]: content };
}
