import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  h1: {},
  h2: {
    fontFamily: "Salsa",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "64px",
    lineHeight: "78px",
    color: "#3C55F6",
  },
});

export const theme = createTheme({
  typography: {
    h1: {},
    h2: {
      fontFamily: "Salsa",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "64px",
      lineHeight: "78px",
      color: "#3C55F6",
    },
    body1: {
      fontFamily: "Scope One",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "25px",
      color: "#000000",
    },
  },
});
