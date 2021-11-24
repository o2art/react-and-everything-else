import { db } from "../config";
import { updateDoc, doc } from "@firebase/firestore"; //set != update

export const handleEdit = async (id, todo_value, todo_id) => {
  const todo = prompt("edit your todo", todo_value);
  const docRef = doc(db, "users", id, "todos", todo_id);
  await updateDoc(docRef, { todo: todo });
};
