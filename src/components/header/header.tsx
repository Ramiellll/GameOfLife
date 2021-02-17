import React, { useState, useCallback, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "../../index.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["AloneOnEarth"].join(","),
    fontSize: 30
  },
});

function Header() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" color="secondary">
          <Toolbar>
            <Typography>
              Game of Life
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default Header;
