import React, { useRef } from "react";
import { handleSignUp, handleLogin, useAuth } from "../firebase/index";

export const Home = () => {
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const clearInput = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="App">
      <div className="logged-in">
        {" "}
        Currently logged in as: {currentUser?.email}{" "}
      </div>
      <div className="login">
        <input type="text" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button
          onClick={() => {
            try {
              handleSignUp(emailRef.current.value, passwordRef.current.value);
              clearInput();
            } catch (e) {
              alert(e.message);
            }
          }}
          disabled={currentUser}
        >
          sign up
        </button>
        <button
          onClick={() => {
            try {
              handleLogin(emailRef.current.value, passwordRef.current.value);
              clearInput();
            } catch (e) {
              alert(e.message);
            }
          }}
          disabled={currentUser}
        >
          log in
        </button>
      </div>
    </div>
  );
};
