import React, { useState } from "react";
import "./App.css";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import TextField from "@material-ui/core/TextField";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { handleSave, handleDelete } from "./utils";
import { Menu } from "@material-ui/core";

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const CheckboxForm = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<DeleteIcon />}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      label="test checkbox"
    />
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">TODO app</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to TODOs app
            </Typography>
            <Typography variant="subtitle1">
              Make notes and dont forget to do them!
            </Typography>

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>
            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="Email"
              placeholder="test@test.pl"
            />
            <CheckboxForm />
            <ButtonGroup variant="outlined">
              <Button
                style={{ width: "100%" }}
                startIcon={<SaveIcon />}
                color={"primary"}
                onClick={() => handleSave()}
              >
                Save
              </Button>
              <Button
                style={{ width: "100%" }}
                startIcon={<DeleteIcon />}
                color={"secondary"}
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}
