import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    Youtube: {
      50: "#ffe5e5",
      100: "#ffb8b8",
      200: "#ff8a8a",
      300: "#ff5c5c",
      400: "#ff6d6d",
      500: "red.500",
      600: "#cc5252",
      700: "#b24545",
      800: "#993838",
      900: "#802b2b",
    },
    Instagram: {
      50: "#f2d9ff",
      100: "#e6a3ff",
      200: "#d566ff",
      300: "#c128ff",
      400: "#9d1fff",
      500: "#7a1bd9",
      600: "#5915b0",
      700: "#410c87",
      800: "#2a0460",
      900: "#1c003d",
    },
    Tiktok: {
      50: "#f4f9f7",
      100: "#e0f2f1",
      200: "#b9d8d5",
      300: "#9fd0cc",
      400: "#66b9a7",
      500: "#2dbf87",
      600: "#1b8c63",
      700: "#14684c",
      800: "#0d4b38",
      900: "#05302a",
    },
    Button: {
      normal: "#FFFFFF",
      hover: "#c9c3c3",
      active: "#FFFFFF",
    },
    background: "#1a1a1a",
    text: "rgb(48, 48, 48)",
  },
  styles: {
    global: {
      body: {
        bg: "rgb(251, 251, 251)",
        color: "text",
        minHeight: "100vh",
      },
      "#root": {
        minHeight: "100vh",
      },
    },
  },
});

export default theme;
