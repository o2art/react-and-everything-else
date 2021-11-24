import React from "react";
import { Page } from "../components/Page";

export const Contact = ({ name }) => {
  return (
    <Page title="Contact">
      <h2>Contact Page</h2>
      <p> Hello, {name}</p>
    </Page>
  );
};
