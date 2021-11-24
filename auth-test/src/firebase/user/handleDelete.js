import { db } from "../config";
import { deleteDoc, doc } from "@firebase/firestore";

export const handleDelete = async (id, todos_id) => {
  const docRef = doc(db, "users", id, "todos", todos_id);
  await deleteDoc(docRef);
  //console.log(`id of deleted doc: ${todos_id}`);
};
