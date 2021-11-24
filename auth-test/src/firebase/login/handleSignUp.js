import { auth, db } from "../config";
import { doc, setDoc } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "@firebase/auth";

export async function handleSignUp(email, password) {
  try {
    const userRef = await createUserWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, "users", userRef.user.uid, "todos", "first_todo");
    await setDoc(docRef, { todo: "this is your first todo!" });
  } catch (err) {
    alert(err.message);
  }
}
