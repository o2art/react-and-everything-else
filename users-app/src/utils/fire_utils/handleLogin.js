import db from "../../firebase/firebase";
import { updateDoc, doc } from "@firebase/firestore"; //set != update

export const handleLogin = async (id) => {
  const name = prompt("Name a color");
  const value = prompt("Name it value");
  const docRef = doc(db, "colors", id);
  const payload = { name: name, value: value };
  await updateDoc(docRef, payload);
  console.log(`id of edited doc: ${id}`);
};
