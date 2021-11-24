import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9100",
    },
    secondary: {
      main: "#52b202",
    },
  },
});

export default function Apple() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Grid container>
          <Typography> Gówno </Typography>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
