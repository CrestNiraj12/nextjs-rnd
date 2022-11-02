import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import ThemeToggler from "../components/ThemeToggler";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeToggler />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
