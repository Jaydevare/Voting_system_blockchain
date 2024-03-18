import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bg: "#1d1d1d",
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
