import {
  Menu,
  Avatar,
  Box,
  Divider,
  Typography,
  ListItemButton as OptionButtons,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  PencilIcon as EditIcon,
  CreditCardIcon as WalletIcon,
} from "@primer/octicons-react";

const styles = {
  // Creating all the styles for the component
  avatarSection: {
    paddingLeft: 15,
    paddingRight: 10,
    marginBottom: 10,
  },
  avatarSectionText: {
    marginLeft: 15,
    marginRight: 25,
  },
  avatarMenu: {
    background: "#696FF8",
    height: 41,
    width: 41,
    fontSize: 20,
  },
  menuEditOptions: {
    marginLeft: 13,
    fontSize: 14,
    opacity: "80%",
  },
  menuEmail: {
    fontSize: 13,
    opacity: "55%",
  },
  menuSignOut: {
    fontSize: 14,
    opacity: "80%",
  },
  divider: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
};

const useStyles = makeStyles({
  // Creating all the classes here
  icons: {
    marginLeft: 15,
    opacity: "50%",
  },
  profileMenu: {
    "& .MuiPaper-root": {
      borderRadius: "15px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
});

type ProfileMenuProps = {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  close: () => void;
};

function ProfileMenu({ anchorEl, isOpen, close }: ProfileMenuProps) {
  const classes = useStyles();
  return (
    <Menu
      open={isOpen}
      onClose={close}
      anchorEl={anchorEl}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      style={{
        marginTop: 20,
      }}
      className={classes.profileMenu}
    >
      <Box display="flex" flexDirection="column" style={{ paddingTop: 5 }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          style={styles.avatarSection}
        >
          <Avatar style={styles.avatarMenu}>P</Avatar>
          <Box
            display="flex"
            flexDirection="column"
            style={styles.avatarSectionText}
          >
            <Typography style={{ fontSize: 19 }}>Prathmesh Bhatt</Typography>
            <Typography style={styles.menuEmail}>ppbhatt500@gmail.com</Typography>
          </Box>
        </Box>
        <Divider style={styles.divider} />

        <OptionButtons>
          <EditIcon size={16.5} className={classes.icons} />
          <Typography style={styles.menuEditOptions}>Edit profile</Typography>
        </OptionButtons>

        <OptionButtons>
          <WalletIcon size={15} className={classes.icons} />
          <Typography style={styles.menuEditOptions}>Payment</Typography>
        </OptionButtons>

        <Divider style={styles.divider} />

        <OptionButtons style={{ display: "flex", justifyContent: "center" }}>
          <Typography style={styles.menuSignOut}>Sign out</Typography>
        </OptionButtons>
      </Box>
    </Menu>
  );
}

export default ProfileMenu;
