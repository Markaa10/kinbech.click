import { ThemeProvider } from "@mui/material";
import { render } from "react-dom";
import { theme } from "styles";
import App from "./App";

render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
