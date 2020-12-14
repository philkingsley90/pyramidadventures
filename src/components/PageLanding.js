import React from "react";
import { observer } from "mobx-react";

import {
  makeStyles,
  Typography,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import ScrollingFeedback from "./ScrollingFeedback";
import PageStore from "../pages/PageStore";

const height = "60vh";
const fullHeight = "calc(100vh - 65px)";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: height,
  },
  img: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: height,
    objectFit: "cover",
    zIndex: 2,
  },
  imgSmall: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: height,
    objectFit: "cover",
    filter: "blur(3px)",
    zIndex: 1,
  },
  content: {
    zIndex: 3,
    height: height,
  },
  fullHeightContainer: {
    width: "100%",
    height: fullHeight,
  },
  fullHeightImg: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: fullHeight,
    objectFit: "cover",
    zIndex: 2,
  },
  fullHeightImgSmall: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: fullHeight,
    objectFit: "cover",
    filter: "blur(3px)",
    zIndex: 1,
  },
  fullHeightContent: {
    zIndex: 3,
    height: fullHeight,
  },

  titleContainer: {
    padding: 0,
  },

  textContent: {
    zIndex: 3,
    width: "100vw",
  },
  feedback: {
    zIndex: 3,
    width: "100vw",
  },
  // innerContainer: {
  //   border: "3px solid white",
  //   padding: "5px",
  //   // backdropFilter: "blur(1px)",
  //   width: "fit-content",
  //   margin: "0 auto 30px auto",
  // },
  // title: {
  //   color: "#fff",
  //   textTransform: "uppercase",
  //   fontSize: "4rem",
  //   border: "2px solid white",
  //   padding: "5px",
  // },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
    // border: "2px solid white",
    marginBottom: "10px",
  },
  jumpTo: {
    position: "absolute",
    bottom: "65px",
  },
}));

const Content = observer(() => {
  const classes = useStyles();
  const currentPage = PageStore.getCurrentPage();

  const fullPage = currentPage.fullPage;
  return currentPage ? (
    <div className={fullPage ? classes.fullHeightContainer : classes.container}>
      {currentPage.imgSmall ? (
        <img
          src={currentPage.imgSmall}
          alt="Pyramid Adventures"
          className={fullPage ? classes.fullHeightImg : classes.imgSmall}
        />
      ) : null}
      <img
        src={currentPage.img}
        alt="Pyramid Adventures"
        className={fullPage ? classes.fullHeightImg : classes.img}
      />
      <Grid
        container
        direction="column"
        justify={fullPage ? "space-between" : "center"}
        className={fullPage ? classes.fullHeightContent : classes.content}
      >
        {fullPage ? <Grid item /> : null}
        <Grid item className={classes.textContent}>
          <Container maxWidth="lg" className={classes.titleContainer}>
            <Typography variant="h1" className={classes.title}>
              {currentPage.title}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              {currentPage.subtitle}
            </Typography>
            {fullPage ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  document
                    .getElementById("page-content")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            ) : null}
          </Container>
        </Grid>
        {fullPage ? (
          <Grid item className={classes.feedback}>
            <ScrollingFeedback />
          </Grid>
        ) : null}
      </Grid>
      {fullPage ? <div id="page-content" className={classes.jumpTo} /> : null}
    </div>
  ) : null;
});

export default Content;
