import { auth } from "../config";
import { signOut } from "@firebase/auth";

export async function handleLogout() {
  try {
    await signOut(auth);
    console.info("User logged out");
  } catch (err) {
    alert(err.message);
  }
}
