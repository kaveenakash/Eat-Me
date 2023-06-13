import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#00ccbc"
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {}
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingRight: "0px"
        }
      }
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif"
  }
});

export default theme;
