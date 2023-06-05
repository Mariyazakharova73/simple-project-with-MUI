import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import AddIcon from "./components/AddIcon";
import { Box, Stack, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
    components: {
      MuiListItemButton: {
        // defaultProps: {
        //   selected: true
        // },
        styleOverrides: {
          // root: ({ ownerState, theme }) => ({
          //   ":hover": {
          //     backgroundColor: "rgba(226, 237, 248, 0.3)",
          //     color: "white",
          //     ".MuiListItemIcon-root": {
          //       color: "white",
          //     },
          //   },
          //   "&.Mui-selected": {
          //     "&:hover": {
          //       backgroundColor: "rgba(226, 237, 248, 0.3)",
          //       color: "red",
          //     },
          //     backgroundColor: "rgba(226, 237, 248, 0.3)",
          //     color: "white",
          //     ".MuiListItemIcon-root": {
          //       color: "white",
          //     },
          //   },
          //   borderRadius: theme.spacing(2),
          // }),
        },
      },
    },
  });

  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBar changeMode={changeMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddIcon />
      </Box>
    </ThemeProvider>
  );
}

export default App;
