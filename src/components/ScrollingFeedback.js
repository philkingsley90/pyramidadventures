import React from "react";
import { observer } from "mobx-react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import PageStore from "../pages/PageStore";

const useStyles = makeStyles((theme) => ({
  container: theme.sections.feedback,
  containerTransparent: {},
  carousel: {
    width: "100%",
    "& .slide": {
      background: "transparent",
    },
  },
  item: {
    ...theme.sections.feedback,
    width: "100%",
    height: "100%",
    padding: "15px 0 35px 0",
  },
  itemTransparent: {
    ...theme.sections.feedbackTransparent,
    width: "100%",
    height: "100%",
    padding: "15px 0 35px 0",
  },
  quoteText: {
    marginBottom: "10px",
    fontWeight: "700",
    padding: "0 5px 0 5px",
  },
  quoteAuthor: {
    fontWeight: "400",
  },
}));

const ScrollingFeedback = observer(() => {
  const classes = useStyles();
  const currentPage = PageStore.getCurrentPage();
  return currentPage && currentPage.feedback ? (
    <div
      className={
        currentPage.feedbackTransparent
          ? classes.containerTransparent
          : classes.container
      }
    >
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        showIndicators={true}
        autoPlay
        stopOnHover
        infiniteLoop
        className={classes.carousel}
        interval={8000}
      >
        {currentPage.feedback.map((item, i) => (
          <Grid
            container
            className={
              currentPage.feedbackTransparent
                ? classes.itemTransparent
                : classes.item
            }
            key={i}
            direction="column"
            justify="space-around"
          >
            <Grid item>
              <Typography variant="body1" className={classes.quoteText}>
                {'"' + item.quote + '"'}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                component="p"
                className={classes.quoteAuthor}
              >
                {item.author}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </div>
  ) : null;
});

export default ScrollingFeedback;
