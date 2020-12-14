import React from "react";
import { makeStyles, Grid, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import youtubeImg from "../images/watch-on-youtube.jpg";
import onlinePackagesImg from "../images/online-packages.jpg";
import teachAndCpdImg from "../images/teach-and-cpd.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    ...theme.sections.secondary,
  },
  item: {
    padding: "15px",
  },
  img: {
    width: "100%",
    objectFit: "cover",
    cursor: "pointer",
  },
  text: {
    cursor: "pointer",
  },
}));

const Content = () => {
  const classes = useStyles();
  const history = useHistory();

  const joinInOptions = [
    {
      xs: 12,
      img: youtubeImg,
      alt: "Youtube videos",
      text: "",
      buttonText: "Find Out More",
      onClick: () => {
        history.push("/join-in/#youtube");
      },
    },
    {
      img: onlinePackagesImg,
      alt: "Online Packages",
      text: "",
      buttonText: "Find Out More",
      onClick: () => {
        history.push("/join-in/#online-packages");
      },
    },
    {
      img: teachAndCpdImg,
      alt: "Teaching and CPD",
      text: "",
      buttonText: "Find Out More",
      onClick: () => {
        history.push("/join-in/#face-to-face");
      },
    },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h2">Join In</Typography>
      <Grid container direction="row">
        {joinInOptions.map((option) => (
          <Grid
            key={option.alt}
            container
            item
            direction="column"
            xs={option.xs || 6}
            sm={4}
            className={classes.item}
            justify="space-between"
          >
            <Grid item>
              <img
                src={option.img}
                alt={option.alt}
                className={classes.img}
                onClick={option.onClick}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                onClick={option.onClick}
                className={classes.text}
              >
                {option.text}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={option.onClick}
              >
                {option.buttonText}
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Content;
