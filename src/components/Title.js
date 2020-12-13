import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    // left: "50%",
    // transform: "translate(-50%, -100%)",
    margin: "30vh auto 0 auto",
    width: "calc(100% - 20px)",
    height: "100%",
    // maxWidth: "800px",
    zIndex: 10,
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
    textTransform: "uppercase",
    fontSize: "3.5rem",
    letterSpacing: "6px",
    color: "#fff",
    // border: "2px solid white",
    padding: "5px",
  },
  subtitle: {
    color: "#fff",
    fontSize: "1.5rem",
    color: "#fff",
    // border: "2px solid white",
    padding: "5px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
}));

const Title = ({ title }) => {
  const classes = useStyles();
  return title ? (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h2" className={classes.subtitle}>
          Yoga Tales For Kids
        </Typography>
      </div>
    </div>
  ) : null;
};

export default Title;
