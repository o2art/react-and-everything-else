import { auth } from "../config";
import { sendPasswordResetEmail } from "@firebase/auth";

import validator from "validator";

export async function handleRestorePassword(email, callback) {
  if (email.length > 0) {
    if (validator.isEmail(email)) {
      try {
        await sendPasswordResetEmail(auth, email);
        console.info("Password reset email sent");
      } catch (err) {
        if (
          err.message.substring(22, err.message.length - 2) === "user-not-found"
        ) {
          callback("Email does not exist");
        }
      }
    } else {
      callback("Email is not valid");
    }
  } else {
    callback("Email cannot be empty");
  }
}
