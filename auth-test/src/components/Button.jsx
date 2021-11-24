import React from "react";
import { useAuth } from "../firebase";

export const Button = ({ title, callback }) => {
  const currentUser = useAuth();
  <button onClick={callback} disabled={currentUser}>
    {title}
  </button>;
};
