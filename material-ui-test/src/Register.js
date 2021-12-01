import React, { useState } from "react";

import validator from "validator";

import { Link } from "react-router-dom";

import { createTheme, ThemeProvider, styled } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import FireplaceIcon from "@material-ui/icons/Fireplace";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b26500",
    },
    secondary: {
      main: "#00a152",
    },
  },
});

const CssTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#357a38",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "#ab003c",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [currentUser, setCurrentUser] = useState(false);

  const handleSubmit = () => {
    setCurrentUser(true);
    if (email.length > 0) {
      if (password.length > 0) {
        if (validator.isEmail(email)) {
          if (validator.isStrongPassword(password)) {
            console.log(email, password);
          } else {
            setError("weak password");
          }
        } else {
          setError("wrong email");
        }
      } else {
        setError("password cannot be empty");
      }
    } else {
      setError("email cannot be empty");
    }
    setCurrentUser(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <Container
        maxWidth="xs"
        style={{
          backgroundColor: "lightgray",
          textAlign: "center",
        }}
      >
        <CssBaseline />
        <div>
          {error ? (
            <Alert
              variant="filled"
              severity="error"
              style={{
                marginTop: 10,
                padding: 10,
                position: "absolute",
                left: "550px",
                width: "350px",
              }}
              fixed="true"
            >
              {error}
            </Alert>
          ) : null}
        </div>
        <Grid container xs={12}>
          <Grid item style={{ margin: "0 auto", paddingTop: 20 }}>
            <FireplaceIcon color="primary" style={{ fontSize: 100 }} />
          </Grid>
        </Grid>
        <Box
          style={{
            flexDirection: "column",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" color="inherit">
                TODOs app
              </Typography>
              <Typography variant="body2">
                Create your account to save your plans and ideas quickly!
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                required
                label="Email"
                name="email"
                value={email}
                inputProps={{ maxLength: 30 }}
                onInput={(e) => setEmail(e.target.value)}
                onClick={() => setError("")}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <CssTextField
                required
                label="Password"
                name="password"
                type="password"
                value={password}
                inputProps={{ maxLength: 20 }}
                onInput={(e) => setPassword(e.target.value)}
                onClick={() => setError("")}
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="secondary"
                disabled={currentUser}
              >
                Register
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item xs={7}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link style={{ cursor: "pointer" }} to={"/"}>
                  Log in{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2">
                Forget pass?{" "}
                <Link style={{ cursor: "pointer" }} to={"/restorepassword"}>
                  Restore{" "}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
