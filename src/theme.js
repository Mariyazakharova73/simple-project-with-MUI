import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#ffebee",
  //   },
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          color: 'red'
        },
      },
    },
  },
});
