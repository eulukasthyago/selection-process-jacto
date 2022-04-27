import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/GlobalStyles'

const theme = {
  colors: {
    primary: '#FFCC4D',
    background: '#292F33',
    backgroundLight: '#CCD6DD',
    text: '#292F33',
    secondaryText: '#99AAB5',
    textInDark: '#CCD6DD'
  },
}



export default function App({ Component, pageProps }:any) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}