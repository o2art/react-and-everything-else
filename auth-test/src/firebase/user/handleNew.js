import { db } from "../config";
import { collection, addDoc } from "@firebase/firestore";

export const handleNew = async (id) => {
  const todo = prompt("write your todo");
  const collRef = collection(db, "users", id, "todos");
  await addDoc(collRef, { todo: todo });
};
