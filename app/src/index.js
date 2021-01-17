import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import GlobalStyle from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
