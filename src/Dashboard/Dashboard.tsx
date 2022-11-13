import react, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import CampaignCard from "./CampaignCard";


import {
  Grid,
  Box,
  IconButton,
  Typography,
  Card,
  CardActionArea,
  Dialog,
  LinearProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  Button,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { ReactComponent as NoCampaigns } from "../assets/dashboard-no-campaign.svg";
import { ReactComponent as PlusIcon } from "../icons/plus-icon.svg";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  PlusCircleIcon,
} from "@primer/octicons-react";
import {
  PreferredPlatform,
  urlRegex,
  instagramRegex,
  tiktokRegex,
} from "../Constants";

const styles = {
  // Creating all the styles here
  root: {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundColor: "#EDEDED",
    overflow: "hidden",
  },
  noCampaignRoot: {
    width: window.innerWidth * 0.85,
    marginTop: 95,
  },
  noCampaignText: {
    marginBottom: 96.5,
    fontSize: 24,
    width: "40%",
    opacity: 0.5,
  },
  gridRoot: {
    marginTop: 2,
    overflowX: "scroll",
    height: window.innerHeight * 0.65,
  },
  addCampaignButton: {
    background: "#696FF8",
    padding: 15,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop: -32.5,
  },
  addCampaignCard: {
    borderRadius: 20,
    height: 225,
    width: 285,
    boxShadow: "none",
    border: "2px dashed rgba(0, 0, 0, 0.4)",
    backgroundColor: "#EDEDED",
  },
  addCampaignCardBox: {
    height: 225,
    width: 285,
  },
  addCampaignCardButton: {
    background: "#696FF8",
    padding: 15,
  },
  campaignRoot: {
    borderRadius: 25,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 25,
    paddingBottom: 25,
  },
  campaignTitle: {
    fontSize: 30,
    fontWeight: "bolder",
  },
  progress: {
    borderRadius: 35,
    backgroundColor: "#E0E0E0",
    marginTop: 2,
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#696FF8",
    },
    height: 5,
  },
  menuStyles: {
    boxShadow: "0px 2px 3.5px rgba(0, 0, 0, 0.2)",
  },
  campaignText: {
    marginTop: 25,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#696FF8",
    fontWeight: "bold",
    borderRadius: 8,
    padding: 8,
    fontSize: 14,
    color: "#FFFFFF",
    width: "35%",
  },
  backButton: {
    backgroundColor: "#FFFFFF",
    fontWeight: "bold",
    borderRadius: 8,
    padding: 8,
    fontSize: 14,
    color: "#696FF8",
    width: "35%",
    border: "1.5px #696FF8 solid",
  },
};

const Campaigns: Array<{
  title: string;
  description: string;
  stats: {
    views: string;
    likes: string;
  };
  completion: number;
}> = [
  {
    title: "Mission 1 - Interstellar Finder",
    description:
      "An asteroid drilling software engineering devloper tasked with developing an application to help plan drilling new asteroids",
    stats: {
      views: "4.3M",
      likes: "2.3K",
    },
    completion: 80,
  }, 
  {
    title: "Mission 1 - Interstellar Finder",
    description:
      "An asteroid drilling software engineering devloper tasked with developing an application to help plan drilling new asteroids",
    stats: {
      views: "4.3M",
      likes: "2.3K",
    },
    completion: 80,
  }, 
  {
    title: "Mission 1 - Interstellar Finder",
    description:
      "An asteroid drilling software engineering devloper tasked with developing an application to help plan drilling new asteroids",
    stats: {
      views: "4.3M",
      likes: "2.3K",
    },
    completion: 80,
  }
  
  
];

function Dashboard() {
  const [loading, setLoading] = useState<boolean>(false);
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [campaign, setCampaign] = useState<boolean>(false); // To open the create campaign modal
  const [campaignState, setCampaignState] = useState<number>(1);
  const [progress, setProgress] = useState<number>(15); // Set progress of Create Campaign
  const [campaignName, setcampaignName] = useState<string>("");
  const [campaignDescription, setCampaignDescription] = useState<string>("");
  const [campaignPlatform, setCampaignPlatform] = useState<string[]>([]);
  const [instagramHandle, setInstagramHandle] = useState<string>("");
  const [instagramHashtag, setInstagramHashtag] = useState<string>("");
  const [tiktokHandle, setTiktokHandle] = useState<string>("");
  const [tiktokHashtag, setTiktokHashtag] = useState<string>("");
  const [website, setWebsite] = useState<string>("");

  function changeCampaignState(type: string): void {
    if (type === "next") {
      if (campaignState === 1 && campaignPlatform.includes("Instagram")) {
        // If Instagram is a platform
        setCampaignState(2); // State represents Instagram form
        campaignPlatform.includes("Tiktok") ? setProgress(35) : setProgress(55);
      } else if (campaignState === 1 && campaignPlatform.includes("Tiktok")) {
        // If Tiktok is the only platfrom
        setCampaignState(3); // State represents Tiktok form
        setProgress(55);
      } else if (campaignState === 2 && campaignPlatform.includes("Tiktok")) {
        setCampaignState(3);
        setProgress(75);
      } else if (campaignState === 2 && !campaignPlatform.includes("Tiktok")) {
        setCampaignState(4); // State represents final form
        setProgress(85);
      } else {
        setCampaignState(4);
        setProgress(85);
      }
    } else {
      if (campaignState === 4 && campaignPlatform.includes("Tiktok")) {
        // If Titok is a platform
        setCampaignState(3);
        campaignPlatform.includes("Instagram")
          ? setProgress(75)
          : setProgress(55);
      } else if (campaignState === 4 && !campaignPlatform.includes("Tiktok")) {
        // If Tiktok is not a platform
        setCampaignState(2);
        setProgress(55);
      } else if (
        campaignState === 3 &&
        campaignPlatform.includes("Instagram") // If clicking back from Tiktok and Instagram is a platform
      ) {
        setCampaignState(2);
        setProgress(35);
      } else if (
        campaignState === 3 &&
        !campaignPlatform.includes("Instagram") // If clicking back from Tiktok and Instagram is not a platform
      ) {
        setCampaignState(1);
        setProgress(15);
      } else {
        setCampaignState(1);
        setProgress(15);
      }
    }
  }

  function checkState(name: string): boolean {
    // Error checking added
    switch (name) {
      case "campaignInfo":
        if (
          campaignName === "" ||
          campaignDescription === "" ||
          campaignPlatform.length === 0
        ) {
          setInfoOpen(true);
          setErrorMessage("Please fill out all the fields!");
        }
        return (
          campaignName === "" ||
          campaignDescription === "" ||
          campaignPlatform.length === 0
        );

      case "instagramInfo":
        if (instagramHandle === "" && instagramHashtag === "") {
          setInfoOpen(true);
          setErrorMessage("Please enter atleast one of the field!");
        } else if (
          instagramHandle !== "" &&
          !instagramRegex.test(instagramHandle)
        ) {
          setInfoOpen(true);
          setErrorMessage("Please enter a valid Instagram account");
        }
        return instagramHandle === ""
          ? instagramHashtag === ""
          : !instagramRegex.test(instagramHandle);

      case "tiktokInfo":
        if (tiktokHandle === "" && tiktokHashtag === "") {
          setInfoOpen(true);
          setErrorMessage("Please enter atleast one of the field!");
        } else if (tiktokHandle !== "" && !tiktokRegex.test(tiktokHandle)) {
          setInfoOpen(true);
          setErrorMessage("Please enter a valid Tiktok account");
        }
        return tiktokHandle === ""
          ? tiktokHashtag === ""
          : !tiktokRegex.test(tiktokHandle);

      case "websiteInfo":
        if (website !== "" && !urlRegex.test(website)) {
          setInfoOpen(true);
          setErrorMessage("Please enter a valid URL");
        }
        return website === "" ? false : !urlRegex.test(website);

      default:
        return false;
    }
  }

  function createCampaign() {
    // function to create the campaign
    setCampaign(false);
  }

  return (
    <div style={styles.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        autoHideDuration={6000}
      >
        <Alert onClose={() => setInfoOpen(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
      <Dialog
        open={campaign}
        PaperProps={{
          style: styles.campaignRoot,
        }}
        onClose={() => setCampaign(false)}
      >
        <Box display="flex" flexDirection="column" width={525} height={450}>
          <Typography style={styles.campaignTitle}>
            Start your Mission
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={styles.progress}
          />
          {campaignState === 1 && (
            <div>
              <TextField
                variant="outlined"
                label="Mission Name"
                fullWidth
                style={{ marginTop: 25 }}
                value={campaignName}
                onChange={(e) => setcampaignName(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Mission Description"
                fullWidth
                multiline
                rows={3}
                style={{ marginTop: 20 }}
                value={campaignDescription}
                onChange={(e) => setCampaignDescription(e.target.value)}
              />
              <FormControl fullWidth style={{ marginTop: 20 }}>
                <InputLabel id="platform-campaign-label">
                  Prefered Platform
                </InputLabel>
                
                
              </FormControl>
              <Box
                display="flex"
                flexDirection="row"
                style={{ width: "100%", marginTop: 23.5 }}
                alignItems="center"
                justifyContent="flex-end"
              >
                <Button
                  endIcon={<ArrowRightIcon />}
                  style={{ ...styles.nextButton }}
                  sx={{ textTransform: "none" }}
                  onClick={() => {
                    if (!checkState("campaignInfo"))
                      changeCampaignState("next");
                  }}
                >
                  Next
                </Button>
              </Box>
            </div>
          )}
          {campaignState === 2 && (
            <div>
              <Typography style={styles.campaignText}>
                The influencer will use this information to tag your business on
                their posts. Please enter your instagram handle, a hashtag for
                the entire campaign, or both!
              </Typography>
              <TextField
                label="Instagram Handle"
                fullWidth
                style={{ marginTop: 35 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">@</InputAdornment>
                  ),
                }}
                value={instagramHandle}
                onChange={(e) => setInstagramHandle(e.target.value)}
              />
              <TextField
                label="Instagram Hashtag"
                fullWidth
                style={{ marginTop: 25 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">#</InputAdornment>
                  ),
                }}
                value={instagramHashtag}
                onChange={(e) => setInstagramHashtag(e.target.value)}
              />
              <Box
                display="flex"
                flexDirection="row"
                style={{ width: "100%", marginTop: 55 }}
                alignItems="center"
                justifyContent="flex-end"
              >
                <Button
                  startIcon={<ArrowLeftIcon />}
                  style={styles.backButton}
                  sx={{ textTransform: "none" }}
                  onClick={() => changeCampaignState("back")}
                >
                  Back
                </Button>
                <Button
                  endIcon={<ArrowRightIcon />}
                  style={{ ...styles.nextButton, marginLeft: 25 }}
                  sx={{ textTransform: "none" }}
                  onClick={() => {
                    if (!checkState("instagramInfo")) {
                      changeCampaignState("next");
                    }
                  }}
                >
                  Next
                </Button>
              </Box>
            </div>
          )}
          {campaignState === 3 && (
            <div>
              <Typography style={styles.campaignText}>
                The influencer will use this information to tag your business on
                their posts. Please enter your tikok handle, a hashtag for the
                entire campaign, or both!
              </Typography>
              <TextField
                label="Tiktok Handle"
                fullWidth
                style={{ marginTop: 35 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">@</InputAdornment>
                  ),
                }}
                value={tiktokHandle}
                onChange={(e) => setTiktokHandle(e.target.value)}
              />
              <TextField
                label="Tiktok Hashtag"
                fullWidth
                style={{ marginTop: 25 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">#</InputAdornment>
                  ),
                }}
                value={tiktokHashtag}
                onChange={(e) => setTiktokHashtag(e.target.value)}
              />
              <Box
                display="flex"
                flexDirection="row"
                style={{ width: "100%", marginTop: 55 }}
                alignItems="center"
                justifyContent="flex-end"
              >
                <Button
                  startIcon={<ArrowLeftIcon />}
                  style={styles.backButton}
                  sx={{ textTransform: "none" }}
                  onClick={() => changeCampaignState("back")}
                >
                  Back
                </Button>
                <Button
                  endIcon={<ArrowRightIcon />}
                  style={{ ...styles.nextButton, marginLeft: 25 }}
                  sx={{ textTransform: "none" }}
                  onClick={() => {
                    if (!checkState("tiktokInfo")) {
                      changeCampaignState("next");
                    }
                  }}
                >
                  Next
                </Button>
              </Box>
            </div>
          )}
          {campaignState === 4 && (
            <div>
              <Typography style={styles.campaignText}>
                Please enter your business’ website or a special link to be
                tagged in your influencer’s posts
              </Typography>
              <FormControl fullWidth style={{ marginTop: 25 }}>
                <TextField
                  label="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <FormHelperText>* Optional</FormHelperText>
              </FormControl>
              <Box
                display="flex"
                flexDirection="row"
                style={{ width: "100%", marginTop: 147.5 }}
                alignItems="center"
                justifyContent="flex-end"
              >
                <Button
                  startIcon={<ArrowLeftIcon />}
                  style={styles.backButton}
                  sx={{ textTransform: "none" }}
                  onClick={() => changeCampaignState("back")}
                >
                  Back
                </Button>
                <Button
                  endIcon={<PlusCircleIcon />}
                  style={{ ...styles.nextButton, marginLeft: 25 }}
                  sx={{ textTransform: "none" }}
                  onClick={() => {
                    if (!checkState("websiteInfo")) createCampaign();
                  }}
                >
                  Create Campaign
                </Button>
              </Box>
            </div>
          )}
        </Box>
      </Dialog>
      <NavBar />
      <div style={{ marginTop: 42.5, marginLeft: 115 }}>
        {Campaigns && Campaigns.length === 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={styles.noCampaignRoot}
          >
            <NoCampaigns height={350} width={350} />
            <Typography textAlign="center" style={styles.noCampaignText}>
              You don’t have any campaigns currently, Click “+” to get started!
            </Typography>
            <Box
              width={"98.25%"}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <IconButton
                style={styles.addCampaignButton}
                onClick={() => setCampaign(true)}
              >
                <PlusIcon height={22.5} width={22.5} />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <>
            <SearchBar />
            <Grid
              container
              sx={styles.gridRoot}
              columnSpacing={2}
              rowSpacing={2}
            >
              {Campaigns.map((c) => (
                <Grid item style={{ marginBottom: 5 }}>
                  <CampaignCard 
                    title={c.title}
                    description={c.description}
                    stats={c.stats}
                    completion={c.completion}
                   
                  />
                </Grid>
              ))}
              <Grid item style={{ marginBottom: 5 }}>
                <Card style={styles.addCampaignCard}>
                  <CardActionArea onClick={() => setCampaign(true)}>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                      style={styles.addCampaignCardBox}
                    >
                      <IconButton style={styles.addCampaignCardButton}>
                        <PlusIcon height={25} width={25} />
                      </IconButton>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
