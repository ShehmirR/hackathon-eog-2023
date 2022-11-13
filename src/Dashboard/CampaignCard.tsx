import { Card, CardActionArea, Box, Typography } from "@mui/material";
import { ReactComponent as ExclamationIcon } from "../icons/urgent-icon.svg";
import { ReactComponent as ViewIcon } from "../icons/eye-icon.svg";
import { ReactComponent as LikeIcon } from "../icons/heart-icon.svg";
import { VictoryPie, VictoryLabel } from "victory";

const styles = {
  // Creating all the styles here
  root: {
    borderRadius: 20,
    height: 230,
    width: 290,
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

type CampaingCardProps = {
  title: string;
  description: string;
  stats: {
    views: string; // change to number when formating functionality is added
    likes: string; // change to number when formating functionality is added
  };
  completion: number;
};

function CampaignCard({
  title,
  description,
  stats,
  completion,
}: CampaingCardProps) {
  return (
    <Card style={styles.root}>
      <CardActionArea>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          style={styles.cardHeader}
        >
          <Typography style={styles.title}>{title}</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="row"
            style={styles.cardDescriptionBody}
          >
            <ExclamationIcon
              height={50}
              width={50}
              style={{ marginTop: -14.5 }}
            />
            <Typography style={styles.description}>{description}</Typography>
          </Box>
          <Box display="flex" flexDirection="row" style={styles.cardStatsBody}>
            <Box
              display="flex"
              flexDirection="column"
              style={{ alignItems: "center" }}
            >
              <ViewIcon height={22.5} width={22.5} />
              <Typography style={styles.stats}>{stats.views}</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              style={{ alignItems: "center", marginLeft: 15 }}
            >
              <LikeIcon height={22.5} width={15} />
              <Typography style={styles.stats}>{stats.likes}</Typography>
            </Box>
            <svg viewBox="0 0 500 500" style={styles.chartBody}>
              <VictoryPie
                standalone={false}
                height={375}
                data={[
                  { x: "complete", y: completion },
                  { x: "uncomplete", y: 100 - completion },
                ]}
                colorScale={["#696FF8", "#DFDFDF"]}
                innerRadius={80}
                style={{ labels: { fontSize: 0 } }}
              />
              <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 45 }}
                x={200}
                y={187.5}
                text={`${completion}%`}
              />
            </svg>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default CampaignCard;
