import React from "react";

import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoIcon from "./Icon";

export default function NavBar() {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <LogoIcon props={{ color: "black", style: { fontSize: 40 } }} />
        <Typography variant="h4" color="primary" sx={{ flexGrow: 1 }}>
          TODOs app
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to={"/login"}
          style={{ fontSize: 20, marginRight: 10 }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          component={Link}
          to={"/register"}
          style={{ fontSize: 20, marginLeft: 10 }}
        >
          {" "}
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
}
