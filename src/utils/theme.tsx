import { createTheme } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    customColor: PaletteColorOptions; // Define the custom color
  }
  interface PaletteOptions {
    customColor?: PaletteColorOptions; // Make the custom color optional
  }
}

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Customize the primary color
    },
    secondary: {
      main: "#f50057", // Customize the secondary color
    },
    customColor: {
      main: "#ff9800", // Add your custom color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  // Add more customizations to your theme
});

export default theme;
