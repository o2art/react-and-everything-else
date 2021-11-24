import React from "react";
import { A, useRoutes } from "hookrouter";
import { Page, AboutMe, AboutCat, AboutDog } from "../components";

const routes = {
  "/me": () => <AboutMe />,
  "/cat": () => <AboutCat />,
  "/dog": () => <AboutDog />,
};

export const About = () => {
  const match = useRoutes(routes);

  return (
    <Page title="About">
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <span style={{ marginRight: "20px" }}>
          <A href="/about/me">About Me</A>
        </span>
        <span style={{ marginRight: "20px" }}>
          <A href="/about/cat">About Cat</A>
        </span>
        <span style={{ marginRight: "20px" }}>
          <A href="/about/dog">About Dog</A>
        </span>
      </div>
      About Page
      {match || <div>Basic About Page</div>}
    </Page>
  );
};
