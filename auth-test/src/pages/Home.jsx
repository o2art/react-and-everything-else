import React from "react";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import NavBar from "../components/NavBar";
import Section from "../components/Section";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../style/theme";

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <CssBaseline />
        <NavBar />
        <Grid container spacing={2} sx={{ flexGrow: 1, marginTop: 10 }}>
          <Grid item container spacing={2} sx={{ flexGrow: 1, marginTop: 10 }}>
            <Grid item xs>
              <Section />
            </Grid>
            <Grid item xs>
              <Section />
            </Grid>
            <Grid item xs>
              <Section />
            </Grid>
            <Grid item xs>
              <Section />
            </Grid>
          </Grid>
          <Grid item container spacing={2} sx={{ flexGrow: 1, marginTop: 10 }}>
            <Grid item xs>
              <Section />
            </Grid>
            <Grid item xs>
              <Section />
            </Grid>
            <Grid item xs>
              <Section />
            </Grid>
            <Grid item xs>
              <Section />
            </Grid>
          </Grid>
          <Grid item container spacing={2} sx={{ flexGrow: 1, marginTop: 10 }}>
            <Grid item xs>
              <Section />
            </Grid>
            <Grid item xs>
              <Section />
            </Grid>
            <Grid item xs>
              <Section />
            </Grid>
            <Grid item xs>
              <Section />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
