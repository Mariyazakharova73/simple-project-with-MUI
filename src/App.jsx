import "./App.css";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import { Grid } from "@mui/material";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { GridLg } from "./AppStyles";
import AddIcon from "./components/AddIcon";

function App() {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item md={3} sm={3} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item md={6} sm={9} xs={10}>
          <Feed />
        </Grid>
        <GridLg item md={3}>
          <RightBar />
        </GridLg>
      </Grid>
      <AddIcon />
    </>
  );
}

export default App;
