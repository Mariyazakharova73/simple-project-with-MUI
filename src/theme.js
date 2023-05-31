import { createTheme } from "@mui/material";

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#ffebee",
  //   },
  // },
  components: {
    MuiListItemButton: {
      // defaultProps: {
      //   selected: true
      // },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ":hover": {
            backgroundColor: "rgba(226, 237, 248, 0.3)",
            color: "white",
            ".MuiListItemIcon-root": {
              color: "white",
            },
          },
          "&.Mui-selected": {
            "&:hover": {
              backgroundColor: "rgba(226, 237, 248, 0.3)",
              color: "white",
            },
            backgroundColor: "rgba(226, 237, 248, 0.3)",
            color: "white",

            ".MuiListItemIcon-root": {
              color: "white",
            },
          },
          borderRadius: theme.spacing(2),
        }),
      },
    },
  },
});
