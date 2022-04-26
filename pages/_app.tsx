import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#FFCC4D',
    background: '#292F33',
    text: '#292F33',
    secondaryText: '#99AAB5',
    textInDark: '#CCD6DD'
  },
}

export default function App({ Component, pageProps }:any) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}