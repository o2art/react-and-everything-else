import { auth } from "../config";
import { signOut } from "@firebase/auth";

export async function handleLogout() {
  try {
    await signOut(auth);
  } catch (err) {
    alert(err.message);
  }
}
