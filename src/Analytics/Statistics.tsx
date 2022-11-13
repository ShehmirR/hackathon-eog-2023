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

const bitSortedName = [{"":0,"DRILL_BIT_NAME":"Apollo","BIT_DEPTH_min":117.3,"BIT_DEPTH_max":20974.52,"BIT_DEPTH_mean":8518.402048443213,"RATE_OF_PENETRATION_mean":271.264033781133,"HOOK_LOAD_mean":148.8392843965896,"total_depth":20857.22,"total_hours":76.88899891840607,"CPR":1000,"CPF":4,"CPH":2500,"cost":276651.37729601515},{"":1,"DRILL_BIT_NAME":"AstroBit","BIT_DEPTH_min":111.26,"BIT_DEPTH_max":23160.56,"BIT_DEPTH_mean":9712.262705419675,"RATE_OF_PENETRATION_mean":284.000366123127,"HOOK_LOAD_mean":145.32799214642333,"total_depth":23049.300000000003,"total_hours":81.15940241431622,"CPR":3000,"CPF":1,"CPH":1500,"cost":147788.40362147434},{"":2,"DRILL_BIT_NAME":"Buzz Drilldrin","BIT_DEPTH_min":153.59,"BIT_DEPTH_max":22452.51,"BIT_DEPTH_mean":8774.155481376878,"RATE_OF_PENETRATION_mean":279.160049428297,"HOOK_LOAD_mean":148.22412034831348,"total_depth":22298.92,"total_hours":79.87862176434933,"CPR":5000,"CPF":1.5,"CPH":0,"cost":38448.38},{"":3,"DRILL_BIT_NAME":"ChallengDriller","BIT_DEPTH_min":147.13,"BIT_DEPTH_max":20724.53,"BIT_DEPTH_mean":11990.415799953596,"RATE_OF_PENETRATION_mean":198.9843711669059,"HOOK_LOAD_mean":155.9138493090793,"total_depth":20577.399999999998,"total_hours":103.41214176433938,"CPR":10000,"CPF":0,"CPH":0,"cost":10000}]

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
     <Typography style= {{marginTop: '20px',fontWeight: "bolder"}} variant= "body1" >- TOTAL_DEPTH: </Typography>
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
