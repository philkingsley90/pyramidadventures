import React from "react";
import { Container, makeStyles, Typography, Grid } from "@material-ui/core";
import JoinInOptions from "../components/JoinInSummary";
import coffeeImg from "../images/coffee.jpg";
import portraitImg from "../images/gladfest-portrait-01.jpg";
// import ScrollingFeedback from "../components/ScrollingFeedback";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.sections.primary,
    padding: "20px 0 0 0",
    width: "100%",
  },
  innerContainer: {
    marginBottom: "40px",
  },
  innerContainer2: {
    ...theme.sections.primary,
    padding: 0,
    margin: 0,
  },
  innerContainer3: {
    ...theme.sections.secondary,
    padding: "0 0 0 0",
    margin: 0,
  },
  youTube: {
    width: "100%",
    maxWidth: "800px",
    margin: "auto",
  },
  content: {
    textAlign: "left",
    padding: "40px",
    height: "100%",
  },
  textList: {
    listStyleType: "none",
    paddingInlineStart: 0,
    "& > li": {
      marginBottom: "20px",
    },
  },
  bulletList: {
    textAlign: "left",
    maxWidth: "980px",
    margin: "auto",
    padding: "10px",
    "& > li": {
      marginBottom: "20px",
    },
  },
  text: {
    margin: "10px 0 30px 0",
  },
  researchTitle: {
    marginBottom: "20px",
  },
  researchItem: {
    marginBottom: "10px",
  },
  img: {
    width: "100%",
    height: "100%",
    maxHeight: "calc(100vh - 65px)",
    objectFit: "cover",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Container maxWidth="lg" className={classes.innerContainer}>
          <Typography variant="body1" className={classes.text}>
            As suggested in our name, yoga with Pyramid Adventures is an
            adventure.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            We’re not making it up! There is plenty of research that shows yoga
            has a positive impact on children’s mental health.
          </Typography>
        </Container>

        {/* <ScrollingFeedback /> */}

        <Grid container direction={"row"} className={classes.innerContainer3}>
          <Grid item md={8} xs={12}>
            <Grid
              container
              className={classes.content}
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <Grid item />
              <Grid item>
                <Typography variant="h3">Benefits of yoga</Typography>
                <Typography variant="body2" color="inherit" component="div">
                  <ul className={classes.bulletList}>
                    <li>
                      Helps to develop muscle tone and strength throughout the
                      body, supporting joints.
                    </li>
                    <li>
                      Builds core strength which helps develop good posture and
                      overall good levels of physical fitness.
                    </li>
                    <li>
                      Supports and strengthens the immune system by reducing
                      stress and stimulating the lymph system.
                    </li>
                    <li>
                      Yoga can accommodate all shapes and sizes and is not
                      competitive, so it’s a fabulous form of exercise without
                      the pressure of competition.
                    </li>
                    <li>
                      Increases attention span and improves concentration
                      through our story structure. With our children growing up
                      in this digital era, it is more important than ever to
                      teach our children skills of concentration and
                      perseverance.
                    </li>
                    <li>
                      Children build self-confidence because they can do yoga,
                      they become braver, aspiring to the characters and role
                      models in our stories.
                    </li>
                    <li>
                      Children deal better with anxiety, stress and conflict
                      because they learn to use relaxation and breathing
                      techniques into their day to day life.
                    </li>
                    <li>
                      Improves relationships and social awareness through role
                      playing in stories.
                    </li>
                    <li>
                      Encourages joy and positive outlooks with fun stories and
                      joyful experiences in yoga sessions.
                    </li>
                  </ul>
                </Typography>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>

          <Grid item className={classes.imgContainer} md={4} xs={12}>
            <img
              src={portraitImg}
              alt="Lucy at Glad Fest"
              className={classes.img}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row-reverse"}
          className={classes.innerContainer2}
        >
          <Grid item md={8} xs={12}>
            <Grid
              container
              className={classes.content}
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <Grid item />
              <Grid item>
                <Typography variant="h3" className={classes.researchTitle}>
                  Research time!
                </Typography>

                <Typography
                  variant="body2"
                  color="inherit"
                  className={classes.researchItem}
                >
                  <a
                    href="http://www.emeraldinsight.com/doi/abs/10.1108/JCS-10-2014-0044"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Butzer et al., 2016
                  </a>
                  : Implementing yoga within the school curriculum: a scientific
                  rationale for improving social-emotional learning and positive
                  student outcomes
                </Typography>

                <Typography
                  variant="body2"
                  color="inherit"
                  className={classes.researchItem}
                >
                  <a
                    href="http://onlinelibrary.wiley.com/doi/10.1111/nyas.13025/abstract"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Khalsa &amp; Butzer, 2016
                  </a>
                  : Yoga in school settings: a research review
                </Typography>

                <Typography
                  variant="body2"
                  color="inherit"
                  className={classes.researchItem}
                >
                  <a
                    href="http://www.tandfonline.com/doi/abs/10.1080/00094056.2017.1300488"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Accardo, 2017
                  </a>
                  : Yoga as a School-Wide Positive Behavior Support
                </Typography>

                <Typography
                  variant="body2"
                  color="inherit"
                  className={classes.researchItem}
                >
                  <a
                    href="http://link.springer.com/article/10.1007%2Fs10826-015-0146-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bergen-Cico et al., 2015
                  </a>
                  : Fostering Self-Regulation Through Curriculum Infusion of
                  Mindful Yoga: A Pilot Study of Efficacy and Feasibility
                </Typography>

                <Typography
                  variant="body2"
                  color="inherit"
                  className={classes.researchItem}
                >
                  <a
                    href="http://link.springer.com/article/10.1007/s12671-015-0463-y"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dariotis et al., 2016
                  </a>
                  : A Qualitative Evaluation of Student Learning and Skills Use
                  in a School-Based Mindfulness and Yoga Program
                </Typography>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>
          <Grid item className={classes.imgContainer} md={4} xs={12}>
            <img
              src={coffeeImg}
              alt="Coffee and Yoga"
              className={classes.img}
            />
          </Grid>
        </Grid>
      </div>
      <JoinInOptions />
    </>
  );
};

export default Content;
