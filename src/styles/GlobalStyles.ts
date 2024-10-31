import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f3f7f7;
  }

  body, input, button {
    font-family: "Poppins", sans-serif;
    
  }

  button {
    cursor: pointer;
    transition: filter .5s;

    &:hover {
      filter: brightness(1.1);
      transition: filter .5s;
    }
  }

`;
