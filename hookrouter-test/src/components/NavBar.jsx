import React from "react";
import { A } from "hookrouter";

export const NavBar = () => {
  return (
    <div>
      <h1> Website </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          borderBottom: "1px solid gray",
        }}
      >
        <A href="/">Home</A>
        <A href="/about">About</A>
        <A href="/contact/1234">Contact</A>
      </div>
    </div>
  );
};
