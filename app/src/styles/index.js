import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, #root {
  font-family: Roboto, sans-serif;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;
