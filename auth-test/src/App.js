import "./style/App.css";
import "./firebase/config";
import { useAuth } from "./firebase";
import { useRoutes } from "hookrouter";

import { Wrapper } from "./components/Wrapper";
import { Home, User, NotFound } from "./pages";

const routes = {
  "/": () => <Home />,
  "/:user": ({ user }) => <User user={{ user }} />,
};

function App() {
  useRoutes(routes);
  const currentUser = useAuth();

  return (
    <Wrapper>
      {(currentUser ? <User user={currentUser} /> : <Home />) || <NotFound />}
    </Wrapper>
  );
}

export default App;
