import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,body,*{padding:0;margin:0;box-sizing:border-box;};
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
}
`;
