import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import LandingPage from "./LandingPage";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap');
  body {
    margin: 0;
  }
  span,a {
    color: white;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  * {
    font-family: Montserrat;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={{ textColor: "white" }}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  );
}
