import { Card, CardActionArea, Box, Typography } from "@mui/material";
import { ReactComponent as ExclamationIcon } from "../icons/urgent-icon.svg";
import { ReactComponent as ViewIcon } from "../icons/eye-icon.svg";
import { ReactComponent as LikeIcon } from "../icons/heart-icon.svg";
import { VictoryPie, VictoryLabel } from "victory";
import React from 'react'

const styles = {
  // Creating all the styles here
  root: {
    borderRadius: 20,
    height: 230,
    width: 290,
    marginTop: 0, 
    marginRight:40
  },
  cardHeader: {
    background: "#696FF8",
    height: 62.5,
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  description: {
    fontSize: 12,
    marginLeft: 5,
  },
  cardDescriptionBody: {
    marginLeft: 20,
    marginTop: 15,
    width: "75%",
  },
  cardStatsBody: {
    marginLeft: 45,
    marginTop: 30,
  },
  stats: {
    fontSize: 14,
    opacity: 0.5,
    fontWeight: "bold",
  },
  chartBody: {
    marginTop: -30,
    marginLeft: 50,
  },
};

const Graph2 = () => {
  return (
    <Card style={styles.root}>
    <CardActionArea>
      
    </CardActionArea>
  </Card>
  )
}

export default Graph2