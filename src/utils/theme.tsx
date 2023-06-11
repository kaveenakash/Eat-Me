import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#00ccbc"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif"
  }
});

export default theme;
