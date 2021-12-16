import { auth, db } from "../config";
import { doc, setDoc } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "@firebase/auth";

import validate from "./validate";

export async function handleRegister(email, password, callback) {
  validate(email, password, async (res) => {
    if (res) {
      try {
        const userRef = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const docRef = doc(
          db,
          "users",
          userRef.user.uid,
          "todos",
          "first_todo"
        );
        await setDoc(docRef, { todo: "this is your first todo!" });
        console.info("User created");
        callback(true);
      } catch (err) {
        if (
          err.message.substring(22, err.message.length - 2) ===
          "email-already-in-use"
        )
          callback("User already exists");
      }
    } else {
      callback(res);
    }
  });
}
