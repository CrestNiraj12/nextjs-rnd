import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import ThemeToggler from "../components/ThemeToggler";
import theme from "../theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <ThemeToggler />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
