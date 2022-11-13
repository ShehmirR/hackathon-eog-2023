import react, { useState } from "react";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import GraphUpload from "./Graph.js"
import Statistics from "./Statistics";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  Checkbox,
  SelectChangeEvent,
  Divider,
} from "@mui/material";

const styles = {
  root: {
    height: 1000,
    width: window.innerWidth,
    backgroundColor: "#EDEDED",
    overflow: "hidden",
  },
  heading: {
    fontSize: 36,
    fontWeight: "bolder",
  },
  menuStyles: {
    boxShadow: "0px 2px 3.5px rgba(0, 0, 0, 0.2)",
  },
  analyticsRoot: {
    marginLeft: 175,
    marginTop: 35,
    marginRight: 50,
  },
  menu: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  menuItemAvatar: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  checkbox: {
    color: "#555555",
    "&.Mui-checked": {
      color: "#696FF8",
    },
    "& .MuiSvgIcon-root": { fontSize: 18 },
  },
  menuDivider: {
    marginRight: 25,
    marginLeft: 25,
  },
};

const influencers: Array<{
  id: number;
  name: string;
  pictureUrl: string;
}> = [
  {
    id: 1,
    name: "Asteroid1",
    pictureUrl: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    name: "Asteroid2",
    pictureUrl: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 3,
    name: "Asteroid3",
    pictureUrl: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 4,
    name: "Asteroid4",
    pictureUrl: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Asteroid5",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 6,
    name: "Asteroid6",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 7,
    name: "Asteroid7",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 8,
    name: "Asteroid8",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 9,
    name: "Asteroid9",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 10,
    name: "Asteroid10",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 11,
    name: "Asteroid11",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 12,
    name: "Asteroid12",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 13,
    name: "Asteroid13",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 14,
    name: "Asteroid14",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 15,
    name: "Asteroid15",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 16,
    name: "Asteroid16",
    pictureUrl: "https://picsum.photos/200/310",
  },{
    id: 17,
    name: "Asteroid17",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 18,
    name: "Asteroid18",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 19,
    name: "Asteroid19",
    pictureUrl: "https://picsum.photos/200/310",
  },
  {
    id: 20,
    name: "Asteroid20",
    pictureUrl: "https://picsum.photos/200/310",
  },
 
];

type DisplayAvatarProps = {
  // Props for DisplayAvatar function
  avatars: string[];
};

function DisplayAvatar({ avatars }: DisplayAvatarProps) {
  // Function to display the avatars
  return (
    <Box
      display="flex"
      flexDirection="row"
      style={{ alignItems: "center", marginRight: 15 }}
    >
      {avatars.slice(0, 3).map((avatar) => {
        return <Avatar style={{ marginRight: 10 }} src={avatar} />;
      })}
      {avatars.length > 3 && (
        <Typography>{`+${avatars.length - 3}`}</Typography>
      )}
    </Box>
  );
}

function Analytics() {
  const [selectedInfluencer, setSelectedInfluencer] = useState<string[]>([]);

  return (
    <div style={styles.root}>
      <SideDrawer />
      <Box display="flex" flexDirection="column" style={styles.analyticsRoot}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography style={styles.heading}>Asteroid Analytics</Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <DisplayAvatar
              avatars={selectedInfluencer.map(
                (inf) =>
                  influencers[influencers.findIndex((i) => i.name === inf)]
                    .pictureUrl
              )}
            />
            
          </Box>
          <div style={{display: 'block'}}>
<Graph1></Graph1>
<Graph1></Graph1>
<Graph1></Graph1>

</div>
        </Box>
        <Statistics></Statistics>
       

        <FormControl style={{ width: 275, marginTop: -500, marginRight: 250, marginLeft: 350}}>
              <InputLabel id="select-influencer-label">Select the Asteroid(s)</InputLabel>
              <Select
                labelId="select-influencer-label"
                label="Select the Asteroid"
                style={styles.menu}
                multiple
                onChange={(e: SelectChangeEvent<typeof selectedInfluencer>) => {
                  if (e.target.value.includes("All Influencer")) {
                    if (selectedInfluencer.length < influencers.length)
                      // If there are no selected influencers
                      setSelectedInfluencer(
                        // Select all influencers
                        influencers.map((i) => {
                          return i.name;
                        })
                      );
                    else setSelectedInfluencer([]); // If there are any selected influencers
                  } else {
                    setSelectedInfluencer(
                      // On autofill we get a stringified value.
                      typeof e.target.value === "string"
                        ? e.target.value.split(",")
                        : e.target.value
                    );
                  }
                }}
                MenuProps={{
                  PaperProps: {
                    sx: styles.menuStyles,
                  },
                }}
                value={selectedInfluencer}
                renderValue={(selected) => selected.join(", ")}
              >
                {influencers.map((influencer) => {
                  return (
                    <MenuItem key={influencer.id} value={influencer.name}>
                      <Box
                        display="flex"
                        flexDirection="row"
                        style={{
                          width: "100%",
                        }}
                        justifyContent="space-between"
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            style={styles.menuItemAvatar}
                            src={influencer.pictureUrl}
                          />
                          <Typography style={{ fontSize: 16 }}>
                            {influencer.name}
                          </Typography>
                        </div>
                        <Checkbox
                          checked={
                            selectedInfluencer.indexOf(influencer.name) > -1
                          }
                          sx={styles.checkbox}
                        />
                      </Box>
                    </MenuItem>
                  );
                })}
                <Divider style={styles.menuDivider} />
                <MenuItem key="all" value="All Influencer">
                  <Box
                    display="flex"
                    flexDirection="column"
                    style={{ width: "100%" }}
                    alignItems="center"
                  >
                    <Typography style={{ fontSize: 16 }}>Select all</Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
      </Box>
      <GraphUpload></GraphUpload>

 
      
    </div>
  );
}

export default Analytics;
