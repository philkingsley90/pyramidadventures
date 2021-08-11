import React from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import aboutUsImg from "../images/portrait.jpg";
import outdoorMatsImg from "../images/outdoor-mats.jpg";

const summaries = [
  {
    img: aboutUsImg,
    alt: "Portrait of Lucy",
    title: "The story of Pyramid Adventures",
    text: `She’s been a primary school teacher and now she’s calling herself a Creative Catalyst.  What on earth is she on about?`,
    buttonText: "Find Out More",
    onClickPath: "/about-us",
  },
  {
    img: outdoorMatsImg,
    alt: "Yoga mats set up outdoors for a yoga store",
    title: "Why We Love Yoga",
    text: `Lucy is an experienced primary school teacher who is now on a
    mission to share her joy of yoga with even more children. Lucy knows
    first hand, the positive impact of yoga on children, during her time
    as a classroom teacher, she always made time for yoga because she
    knew it could teach them skills of self-regulation, focus, empathy
    and strength.`,
    buttonText: "Find Out More",
    onClickPath: "/why-we-love-yoga",
  },
];
const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.sections.primary,
    padding: 0,
    width: "100%",
  },
  container2: {
    ...theme.sections.secondary,
    padding: 0,
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    maxHeight: "calc(100vh - 65px)",
  },
  content: {
    textAlign: "left",
    padding: "40px",
    height: "100%",
  },
  text: {
    margin: "10px 0 30px 0",
  },
}));

const Content = () => {
  const classes = useStyles();
  const history = useHistory();
  const goToPage = (path) => {
    history.push(path);
  };

  return (
    <>
      {summaries.map((summary, i) => {
        const onClick = summary.onClickPath
          ? () => goToPage(summary.onClickPath)
          : () => {};
        return (
          <div className={i % 2 ? classes.container : classes.container}>
            <Grid
              container
              direction={i % 2 ? "row-reverse" : "row"}
              key={summary.alt}
            >
              <Grid item md={6} xs={12}>
                <Grid
                  container
                  className={classes.content}
                  direction="column"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item />
                  <Grid item>
                    <Typography variant="h2">{summary.title}</Typography>
                    <Typography
                      variant="body2"
                      color="inherit"
                      className={classes.text}
                    >
                      {summary.text}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onClick}
                    >
                      {summary.buttonText}
                    </Button>
                  </Grid>
                  <Grid item />
                </Grid>
              </Grid>
              <Grid item className={classes.imgContainer} md={6} xs={12}>
                <img
                  src={summary.img}
                  alt={summary.alt || ""}
                  className={classes.img}
                  onClick={onClick}
                />
              </Grid>
            </Grid>
          </div>
        );
      })}
    </>
  );
};

export default Content;
