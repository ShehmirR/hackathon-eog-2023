import {
  Menu,
  Box,
  Typography,
  Divider,
  List,
  ListItemButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  XCircleIcon as CrossIcon,
  ClockIcon,
  PaperAirplaneIcon as AttachmentIcon,
  AlertIcon as UrgentIcon,
} from "@primer/octicons-react";

type NotificationsProps = {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  close: () => void;
};

// Add the custom scrollbar later and revamp icons based on notification types || Also figure out deleting vs clicking icon

const styles = {
  // Creating all the styles here
  innerRoot: {
    paddingBottom: 15,
    width: 300,
    height: 275,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
  },
};

const useStyles = makeStyles({
  // Creating all the Classes here
  notificationsMenu: {
    "& .MuiPaper-root": {
      borderRadius: "15px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  crossIcon: {
    marginLeft: 15,
    opacity: "65%",
  },
  urgentIcon: {
    color: "#FF0000",
  },
  clockIcon: {
    color: "#FFB802",
  },
  attachmentIcon: {
    color: "#1400F8",
  },
});

const notificationsRequest = [
  // temprorary types to build icon rendering functionality
  {
    text: "Mission updates",
    type: "attachment",
  },
  {
    text: "Hook Load malfunctioning, fix it urgently. ",
    type: "Urgent",
  },
  {
    text: "Check the rate of penetration for the drill. ",
    type: "Coming soon",
  },
  {
    text: "Weekly mission check",
    type: "attachment",
  },
  {
    text: "Monthly mission check. ",
    type: "attachment",
  },
  
];

function CommonMenu({ anchorEl, isOpen, close }: NotificationsProps) {
  const classes = useStyles();
  return (
    <Menu
      open={isOpen}
      anchorEl={anchorEl}
      onClose={close}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      style={{
        marginTop: 24.5,
      }}
      className={classes.notificationsMenu}
    >
      <Box display="flex" flexDirection="column" style={styles.innerRoot}>
        <List>
          {notificationsRequest.map((notifications, i) => (
            <>
              {i !== 0 && <Divider style={styles.divider} />}
              <ListItemButton style={{ paddingLeft: 20 }}>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  width="100%"
                  justifyContent="space-between"
                >
                  <Box width="75%">
                    <Typography style={{ fontSize: 16 }}>
                      {notifications?.text}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    style={{ marginLeft: 15 }}
                  >
                    {notifications.type === "due" ? (
                      <ClockIcon size={24.5} className={classes.clockIcon} />
                    ) : notifications.type === "attachment" ? (
                      <AttachmentIcon
                        size={24.5}
                        className={classes.attachmentIcon}
                      />
                    ) : (
                      <UrgentIcon size={24.5} className={classes.urgentIcon} />
                    )}

                    <CrossIcon size={24.5} className={classes.crossIcon} />
                  </Box>
                </Box>
              </ListItemButton>
            </>
          ))}
        </List>
      </Box>
    </Menu>
  );
}

export default CommonMenu;
