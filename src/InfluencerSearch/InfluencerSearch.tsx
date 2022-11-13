import react, { useState } from "react";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import {} from "@mui/material";

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
    </div>
  );
}

export default InfluencerSearch;
