import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50:  "#ffe5e5",
      100: "#ffb8b8",
      200: "#ff8a8a",
      300: "#ff5c5c",
      400: "#ff6d6d",
      500: "#e65f5f",
      600: "#cc5252",
      700: "#b24545",
      800: "#993838",
      900: "#802b2b",
    },
    secondary: "#2c3e50",
    background: "#f4f4f4",
    text: "#FF6D6D",
  },
  styles: {
    global: {
      body: {
        bg: "background",
        color: "text",
      },
    },
  },
});

export default theme;
