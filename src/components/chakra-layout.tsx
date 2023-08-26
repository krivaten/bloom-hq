import Header from "./header";
import { ChakraProvider, Container, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export default function ChakraLayout({ children }: { children: React.ReactNode }) {
  const theme = extendTheme(
    {
      config: {
        initialColorMode: "light",
      },

      colors: {
        brand: {
          "50": "#fbf6f4",
          "100": "#f0dcd4",
          "200": "#e4bdaf",
          "300": "#d49880",
          "400": "#cb8266",
          "500": "#bf6440",
          "600": "#ae4b25",
          "700": "#8c3d1e",
          "800": "#763319",
          "900": "#562512",
        },
      },
      fonts: {
        body: "'Inter', sans-serif",
        heading: "'Inter', sans-serif",
      },
      styles: {
        global: {},
      },
    },
    withDefaultColorScheme({ colorScheme: "brand" })
  );

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container mt={5}>{children}</Container>
    </ChakraProvider>
  );
}
