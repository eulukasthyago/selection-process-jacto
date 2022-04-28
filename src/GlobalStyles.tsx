import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
      primary: "#FFCC4D",
      background: "#292F33",
      backgroundLight: "#CCD6DD",
      text: "#292F33",
      secondaryText: "#99AAB5",
      textInDark: "#CCD6DD",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Lato', sans-serif;
    color: ${theme.colors.text}
  }

  img{
    max-width: 100%;
    height: auto;
  }
`

export default GlobalStyle;