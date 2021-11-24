import { auth } from "../config";
import { signInWithEmailAndPassword } from "@firebase/auth";

export async function handleLogin(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
}
