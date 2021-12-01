import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apple from "./Apple";
import RestorePassword from "./RestorePassword";
import Register from "./Register";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme();

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<Apple />} />
          <Route path="restorepassword" element={<RestorePassword />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
}
