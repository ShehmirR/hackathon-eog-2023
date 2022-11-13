import { Card, CardActionArea, Box, Typography } from "@mui/material";
import { ReactComponent as ExclamationIcon } from "../icons/urgent-icon.svg";
import { ReactComponent as ViewIcon } from "../icons/eye-icon.svg";
import { ReactComponent as LikeIcon } from "../icons/heart-icon.svg";
import { VictoryPie, VictoryLabel } from "victory";
import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const styles = {
  // Creating all the styles here
  root: {
    borderRadius: 20,
    height: 300,
    width: 200,
    marginTop: -550, 
    marginRight:0, 
    marginLeft: -50
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

const Statistics = () => {
  return (
    <Card style={styles.root}>
    <CardActionArea>
     <Typography variant= "h6" >- Statistics</Typography>
     <Typography style= {{marginTop: '60px',fontWeight: "bolder"}} variant= "body1" >- TOTAL_COST: </Typography>
     <CountUp end={100} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
     <Typography style= {{marginTop: '20px',fontWeight: "bolder"}} variant= "body1" >- TOTAL_HOURS: </Typography>
     <CountUp end={100} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
     <Typography style= {{marginTop: '20px',fontWeight: "bolder"}} variant= "body1" >- TOTAL_TIME: </Typography>
     <CountUp end={100} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>


    </CardActionArea>
  </Card>
  )
}

export default Statistics
