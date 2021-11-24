import { db } from "../config";
import { collection, query, getDocs, where } from "@firebase/firestore";
import { handleDelete } from "./handleDelete";

export const handleDeleteQuery = async (id) => {
  const todos = prompt("Name of todos");
  if (todos != null) {
    const collRef = collection(db, "users", id, "todos");
    const q = query(collRef, where("todo", "==", todos));
    const snapshot = await getDocs(q);
    //console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    results.forEach(async (result) => {
      handleDelete(id, result.id);
    });
  }
};
