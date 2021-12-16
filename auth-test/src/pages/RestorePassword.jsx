import React, { useState } from "react";

import { handleRestorePassword } from "../firebase";

import { Link } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { CssTextField } from "../components/CssTextField";
import LogoIcon from "../components/Icon";

import { theme } from "../style/theme";

export function RestorePassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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
                border: "1px solid black",
                left: "550px",
                width: "350px",
              }}
              fixed="true"
            >
              {error}
            </Alert>
          ) : null}
        </div>
        <Grid container>
          <Grid item style={{ margin: "0 auto", paddingTop: 20 }}>
            <LogoIcon props={{ color: "primary", style: { fontSize: 100 } }} />
          </Grid>
        </Grid>
        <Box
          sx={{
            flexDirection: "column",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" color="inherit">
                TODOs app
              </Typography>
              <Typography variant="body2">
                Type your email to recover password
              </Typography>
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs>
              <Button
                onClick={() =>
                  handleRestorePassword(email, (err) => setError(err))
                }
                variant="contained"
                color="secondary"
              >
                Send email
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginTop: 10 }}>
            <Grid item xs={6}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link style={{ cursor: "pointer" }} to={"/login"}>
                  Log in{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Typography variant="body2">
                Don't have an account?{" "}
                <Link
                  style={{ cursor: "pointer" }}
                  to={"/register"}
                  color="primary"
                >
                  Sign up
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                <Link style={{ cursor: "pointer" }} to={"/"}>
                  Home
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
