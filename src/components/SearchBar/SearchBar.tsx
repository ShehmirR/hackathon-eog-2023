import { Box, TextField, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  SearchIcon,
  ThreeBarsIcon as SearchOptionsIcon,
} from "@primer/octicons-react";

const styles = {
  // Creating all the styles here
  textField: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: "82%",
    padding: 10,
    fontStyle: "Roboto",
  },
};

const useStyles = makeStyles({
  // Creating all the classes here
  searchIcon: {
    marginRight: 10,
    marginLeft: 5,
  },
});

function SearchBar() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <TextField
        variant="standard"
        style={styles.textField}
        placeholder="Search by Mission name"
        InputProps={{
          startAdornment: (
            <SearchIcon size={20} className={classes.searchIcon} />
          ),
          disableUnderline: true,
        }}
      />
      <IconButton style={{ marginLeft: 40 }}>
        <SearchOptionsIcon size={30} />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
