import React from "react";

import { Wrapper, NavBar } from "./components";
import { useRoutes } from "hookrouter";

import { Home, About, NotFound, Contact } from "./pages";

const routes = {
  "/": () => <Home />,
  "/about*": () => <About />,
  "/contact/:name": ({ name }) => <Contact name={name} />,
};

function App() {
  const match = useRoutes(routes);

  return (
    <Wrapper>
      <NavBar />
      {match || <NotFound />}
    </Wrapper>
  );
}

export default App;
