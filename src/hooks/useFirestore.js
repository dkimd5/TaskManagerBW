import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const useFirestore = (collctnName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, collctnName);

    const unsub = onSnapshot(collectionRef, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collctnName]);
  console.log(docs);
  return docs;
};

export default useFirestore;
