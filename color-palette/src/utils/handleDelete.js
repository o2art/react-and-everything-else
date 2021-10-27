import db from "../firebase/firebase";
import { deleteDoc, doc } from "@firebase/firestore";

export const handleDelete = async (id) => {
  const docRef = doc(db, "colors", id);
  await deleteDoc(docRef);
  console.log(`id of deleted doc: ${id}`);
};
