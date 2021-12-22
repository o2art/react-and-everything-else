import { auth } from "../config";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "@firebase/auth";

import validate from "./validate";

export async function handleLogin(email, password, callback) {
  validate(email, password, async (res) => {
    if (res) {
      await setPersistence(auth, browserSessionPersistence);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.info("User logged in successfully");
      } catch (err) {
        if (
          err.message.substring(22, err.message.length - 2) === "user-not-found"
        )
          callback("User does not exist");
      }
    } else {
      callback(res);
    }
  });
}
