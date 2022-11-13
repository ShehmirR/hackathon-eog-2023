import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Drawer, Box, Divider, IconButton } from "@mui/material";
import {
  ArrowLeftIcon,
  GraphIcon,
  SearchIcon,
  PeopleIcon,
} from "@primer/octicons-react";


const styles = {
  root: {
    paddingTop: 25,
    paddingRight: 5,
    paddingLeft: 5,
  },
  backButton: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 35,
    marginTop: 10,
    padding: 12.5,
    borderRadius: 10,
  },
  iconsBox: {
    height: window.innerHeight * 0.625,
    marginTop: 100,
  },
  icon: {
    padding: 12.5,
    borderRadius: 10,
  },
  activeIcon: {
    background: "#696FF8",
    padding: 12.5,
    borderRadius: 10,
    color: "#FFFFFF",
  },
};

function SideDrawer() {
  const navigate = useNavigate();
  const location = useLocation().pathname; // getting the active url
  const { id } = useParams(); // getting the campaign id

  const activeComponent =
    location.includes("analytics") === true
      ? "Analytics"
      : location.includes("search") === true
      ? "Search"
      : "People";

  return (
    <Drawer variant="permanent" open>
      <Box display="flex" flexDirection="column" style={styles.root}>
        <IconButton
          style={styles.backButton}
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeftIcon size={25} />
        </IconButton>
        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          style={styles.iconsBox}
        >
          <IconButton
            onClick={() => navigate(`/campaign/${id}/analytics`)}
            style={
              activeComponent === "Analytics" ? styles.activeIcon : styles.icon
            }
          >
            <GraphIcon size={25} />
          </IconButton>
          <IconButton
            onClick={() => navigate(`/campaign/${id}/search`)}
            style={
              activeComponent === "Search" ? styles.activeIcon : styles.icon
            }
          >
            <SearchIcon size={25} />
          </IconButton>
          <IconButton
            onClick={() => navigate(`/campaign/${id}/people`)}
            style={
              activeComponent === "People" ? styles.activeIcon : styles.icon
            }
          >
            
            <PeopleIcon size={25} />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
}

export default SideDrawer;
