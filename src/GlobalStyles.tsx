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

  [data-tooltip] {
    position: relative;
    cursor: pointer;
  }
  [data-tooltip]:before,
  [data-tooltip]:after {
    line-height: 1;
    font-size: .9em;
    pointer-events: none;
    position: absolute;
    box-sizing: border-box;
    display: none;
    opacity: 0;
    filter: drop-shadow(0px 3px 4px rgba(0,0,0,0.1));
  }
  [data-tooltip]:before {
    content: "";
    border: 5px solid transparent;
    z-index: 100;
  }
  [data-tooltip]:after {
    content: attr(data-tooltip);
    text-align: center;
    min-width: 3em;
    max-width: 21em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 20px;
    border-radius: 25px;
    background: #CCD6DD;
    color: #292F33;
    z-index: 99;
  }

  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after,
  [data-tooltip].show_message:before,
  [data-tooltip].show_message:after {
    display: block;
    opacity: 1;
  }
  [data-tooltip]:not([data-flow])::before,
  [data-tooltip][data-flow="top"]::before {
    bottom: 100%;
    border-bottom-width: 0;
    border-top-color: #CCD6DD;
  }
  [data-tooltip]:not([data-flow])::after,
  [data-tooltip][data-flow="top"]::after {
    bottom: calc(100% + 5px);
  }
  [data-tooltip]:not([data-flow])::before, [tooltip]:not([data-flow])::after,
  [data-tooltip][data-flow="top"]::before,
  [data-tooltip][data-flow="top"]::after {
    left: 50%;
    -webkit-transform: translate(-80%, -4px);
            transform: translate(-80%, -4px);
  }
  [data-tooltip][data-flow="bottom"]::before {
    top: 100%;
    border-top-width: 0;
    border-bottom-color: #CCD6DD;
  }
  [data-tooltip][data-flow="bottom"]::after {
    top: calc(100% + 5px);
  }
  [data-tooltip][data-flow="bottom"]::before, [data-tooltip][data-flow="bottom"]::after {
    left: 50%;
    -webkit-transform: translate(-50%, 8px);
            transform: translate(-50%, 8px);
  }
  [data-tooltip][data-flow="left"]::before {
    top: 50%;
    border-right-width: 0;
    border-left-color: #CCD6DD;
    left: calc(0em - 5px);
    -webkit-transform: translate(-8px, -50%);
            transform: translate(-8px, -50%);
  }
  [data-tooltip][data-flow="left"]::after {
    top: 50%;
    right: calc(100% + 5px);
    -webkit-transform: translate(-8px, -50%);
            transform: translate(-8px, -50%);
  }
  [data-tooltip][data-flow="right"]::before {
    top: 50%;
    border-left-width: 0;
    border-right-color: #CCD6DD;
    right: calc(0em - 5px);
    -webkit-transform: translate(8px, -50%);
            transform: translate(8px, -50%);
  }
  [data-tooltip][data-flow="right"]::after {
    top: 50%;
    left: calc(100% + 5px);
    -webkit-transform: translate(8px, -50%);
            transform: translate(8px, -50%);
  }
  [data-tooltip=""]::after, [data-tooltip=""]::before {
    display: none !important;
  }

`;

export default GlobalStyle;
