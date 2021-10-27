import db from "../firebase/firebase";
import { collection, query, getDocs, where } from "@firebase/firestore";
import { handleDelete } from ".";

export const handleDeleteQuery = async (id) => {
  const name = prompt("Name of color");
  const collRef = collection(db, "colors");
  const q = query(collRef, where("name", "==", name));
  const snapshot = await getDocs(q);
  //console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  results.forEach(async (result) => {
    handleDelete(result.id);
  });
};
