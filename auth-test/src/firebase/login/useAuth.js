import { useEffect, useState } from "react";
import { auth } from "../config";
import { onAuthStateChanged } from "@firebase/auth";

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });

  return currentUser;
}
