import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../src/GlobalStyles";
import { AppContextProvider } from "../src/provider/AppContext";

export default function App({ Component, pageProps }: any) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <AppContextProvider>
                    <Component {...pageProps} />
                </AppContextProvider>
            </ThemeProvider>
        </>
    );
}
