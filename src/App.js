import "./App.css";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import { Grid } from "@mui/material";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { GridSm } from "./components/RightBarStyles";

function App() {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={3} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={6} xs={10}>
          <Feed />
        </Grid>
        <GridSm item sm={2}>
          <RightBar />
        </GridSm>
      </Grid>
      
    </>
  );
}

export default App;
