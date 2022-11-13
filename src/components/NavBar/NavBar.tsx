import { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfileMenu from "./ProfileMenu";
import CommonMenu from "./CommonMenu";
import {
  BellIcon as NotifyIcon,
  PersonAddIcon as RequestIcon,
} from "@primer/octicons-react";
import { ReactComponent as EllipseOne } from "../../assets/ellipse-navbar-one.svg";
import { ReactComponent as EllipseTwo } from "../../assets/ellipse-navbar-two.svg";

const styles = {
  // Creating all the styles here
  navbarRoot: {
    height: "10%",
    justifyContent: "center",
    paddingTop: 35,
  },
  navbar: {
    width: "90%",
    background: "#FFFFFF",
    height: "100%",
    borderRadius: 15,
    paddingTop: 5,
    paddingBottom: 5,
    zIndex: 1,
  },
  avatarNavbar: {
    background: "#696FF8",
    filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25))",
    height: 50,
    width: 50,
  },
};

const useStyles = makeStyles({
  // Creating classes for component
  activeIcon: {
    color: "#696FF8",
  },
});

function NavBar() {
  // Component to display the Navbar
  const classes = useStyles();
  const [profileMenu, setProfileMenu] = useState<boolean>(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [notificationsMenu, setNotificationsMenu] = useState<boolean>(false);
  const [notificationsAnchorEl, setNotificationsAnchorEl] =
    useState<HTMLElement | null>(null);
  const [requestsMenu, setRequestsMenu] = useState<boolean>(false);
  const [requestsAnchorEl, setRequestsAnchorEl] = useState<HTMLElement | null>(
    null
  );

  return (
    <Box display="flex" flexDirection="column">
      <div
        style={{
          position: "fixed",
          paddingTop: 5,
          paddingLeft: 45,
        }}
      >
        <EllipseOne />
      </div>
      <div
        style={{
          position: "fixed",
          paddingTop: 55,
          paddingLeft: 75,
        }}
      >
        <EllipseTwo />
      </div>
      <Box display="flex" style={styles.navbarRoot}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          style={styles.navbar}
        >
          <div style={{ paddingLeft: 25 }}>
            <Typography
              style={{
                fontSize: 23,
                fontStyle: "Roboto",
                fontWeight: "bolder",
              }}
            >
              InterstellarFinder
            </Typography>
          </div>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            style={{ paddingRight: 25, width: "15%" }}
          >
            <div>
              <IconButton
                onClick={(e) => {
                  setRequestsMenu(true);
                  setRequestsAnchorEl(e.currentTarget);
                }}
              >
                <RequestIcon
                  size={27}
                  className={requestsMenu ? classes.activeIcon : ""}
                />
              </IconButton>
              <CommonMenu
                anchorEl={requestsAnchorEl}
                isOpen={requestsMenu}
                close={() => setRequestsMenu(false)}
              />
            </div>
            <div>
              <IconButton
                onClick={(e) => {
                  setNotificationsMenu(true);
                  setNotificationsAnchorEl(e.currentTarget);
                }}
              >
                <NotifyIcon
                  size={24}
                  className={notificationsMenu ? classes.activeIcon : ""}
                />
              </IconButton>
              <CommonMenu
                anchorEl={notificationsAnchorEl}
                isOpen={notificationsMenu}
                close={() => setNotificationsMenu(false)}
              />
            </div>
            <div>
              <IconButton>
                <Avatar
                  style={styles.avatarNavbar}
                  onClick={(e) => {
                    setProfileMenu(true);
                    setProfileAnchorEl(e.currentTarget);
                  }}
                >
                  A
                </Avatar>
              </IconButton>
              <ProfileMenu
                anchorEl={profileAnchorEl}
                isOpen={profileMenu}
                close={() => setProfileMenu(false)}
              />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
