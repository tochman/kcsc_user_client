import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const InformationCard = ({ item }) => {
  const { header, description, link } = item;
  return (
    <Card elevation={2} style={styles.fullHeight}>
      <CardActionArea href={link} target='_blank' style={styles.fullHeight} data-cy="action-area">
        <Grid container direction="row" style={styles.fullHeight}>
          <Grid item sm={10} xs={11}>
            <CardContent style={styles.cardContent}>
              <Typography gutterBottom variant="h5" component="h2" data-cy="header">
                {header}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" data-cy="description">
                {description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item sm={2} xs={1}>
            <ArrowForwardIosIcon color="secondary" style={styles.fullHeight} />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default InformationCard;

const styles = {
  fullHeight: {
    height: "100%",
  },
  cardContent: {
    padding: "30px 20px",
  },
};
