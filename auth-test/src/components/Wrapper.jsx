import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "1200px",
        height: "90vh",
        margin: "20px auto auto auto",
        textAlign: "center",
        border: "1px solid gray",
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};
