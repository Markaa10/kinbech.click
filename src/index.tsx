import { render } from "react-dom";

import { GlobalStyles } from "./globalstyles";
import App from "./App";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
