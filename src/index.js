import React from "react";
import ReactDOM from "react-dom";

import App from './App';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
const rootElement = document.getElementById("root");
// import App from "./newApp"

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>,

  rootElement
);

