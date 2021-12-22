import { db } from "../config";
import { deleteDoc, doc } from "@firebase/firestore";

export const handleDeleteQuery = async (id, todos, checked) => {
  console.log(id, todos, checked);
  for (let i = 0; i < checked.length; i++) {
    if (checked[i]) {
      const docRef = doc(db, "users", id, "todos", todos[i].id);
      await deleteDoc(docRef);
    }
  }
};
