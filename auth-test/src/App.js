import { useAuth } from "./firebase";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  Home,
  Register,
  Login,
  RestorePassword,
  ProtectedRoutes,
  Todos,
} from "./pages";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./style/theme";

export default function App() {
  const currentUser = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Routes>
          <Route
            exact
            path="/"
            element={currentUser ? <Navigate to="/todos" /> : <Home />}
          />
          <Route
            path="/register"
            element={currentUser ? <Navigate to="/todos" /> : <Register />}
          />
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/todos" /> : <Login />}
          />
          <Route path="/restorepassword" element={<RestorePassword />} />
          <Route
            path="/todos"
            element={
              currentUser ? <Todos user={currentUser} /> : <Navigate to="/" />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
