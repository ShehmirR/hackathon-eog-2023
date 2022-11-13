import react, { useState } from "react";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import {} from "@mui/material";
import Graph1 from "./Graph1.js"
import Graph2 from "./Graph2.js"
import Graph3 from "./Graph3.js"


const classes = {
  root: {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundColor: "#EDEDED",
    overflow: "hidden",
  },
};

function InfluencerSearch() {
  return (
    <div style={classes.root}>
      <SideDrawer />
      <Graph1></Graph1>
      <Graph2></Graph2>
      <Graph3></Graph3>

    </div>
  );
}

export default InfluencerSearch;
