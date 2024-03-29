import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import JoinInOptions from "../components/JoinInSummary";
import cosmicKids from "../images/cosmic-kids-embedded.jpg";
import learning from "../images/learning.jpg";
import ukulele from "../images/ukulele.jpg";
import ScrollingFeedback from "../components/ScrollingFeedback";

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
    padding: 0,
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
    "& ul": {
      listStyleType: "none",
      paddingInlineStart: 0,
    },
  },
  text: {
    margin: "10px 0 30px 0",
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
            Lucy is an experienced primary school teacher who uses her expertise in education and and creativity in her role as a Creative Catalyst. She works in partnership with a variety of organisations across Gloucestershire, with creatvity and wellbeing at the heart of everything she does.
          </Typography>
        </Container>

        {/* <ScrollingFeedback /> */}

        <Grid container direction={"row"} className={classes.innerContainer3}>
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
                <Typography variant="h3">
                  What has Lucy been involved in?
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  component="div"
                  className={classes.textList}
                >
                  <ul>
                    <li>Lucy is part of the 'Can't Sit Still' family where she works as an artist facilitator and photographer.  Most recently, Lucy has been working on their 'Invisible Thread' project which has been supporting and nurturing new mothers with magical creative invitations.</li>
<li></li>                      
<li>In partnership with Active Gloucestershire, Gloucestershire Healthy Living and Learning and Shift, Lucy taught on the pilot programme to train 20 teachers in Gloucestershire as Wellbeing Ambassadors.  These teachers are now confidently delivering yoga and wellbeing sessions to children all over Gloucestershire in primary and secondary schools.  This work has been celebrated and recomissioned, Lucy will join the team again in Autumn 2021 to train even more teachers.</li>
<li></li>                     
<li>Lucy has been commissioned to develop and deliver a Yoga for Younger Learners course for graduates from the above Wellbeing Ambassador course.  The first round will launch in September 2021.</li>                    
<li></li>                     
<li>Lucy's expertise in Early Years is used in her role as a Lecturer in Early Years at an FE College in Gloucestershire.</li>                    
                  </ul>
                </Typography>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>
          <Grid item className={classes.imgContainer} md={6} xs={12}>
            <img
              src={cosmicKids}
              alt="Cosmic Kids Logo"
              className={classes.img}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row-reverse"}
          className={classes.innerContainer2}
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
                <Typography variant="h3">We're all learners</Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  className={classes.text}
                >
                  As a classroom
                  teacher and EY lecturer, Lucy understands the huge undertaking we ask of
                  children everyday … to learn!  As an artist facilitator, gathering groups of strangers together, Lucy understands the anxieties we have as adults when we meet new people and are asked to do new things.
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  className={classes.text}
                >
                  These gatherings involve such a variety of skills and emotions;
                  joy, frustration, fear, determination, exhaustion and pride.  These feelings
                  can be overwhelming emotions as we learn and grow, and this can
                  too easily be forgotten.
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  className={classes.text}
                >
                  This is why Lucy is always learning and challenging herself. It’s important that she
                  reminds herself of how it feels to be a learner, how it feels to be outside of her comfort zone, so she can
                  respect and support children, young people and adults she works with from this
                  deeply compassionate perspective.
                </Typography>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>
          <Grid item className={classes.imgContainer} md={6} xs={12}>
            <img src={learning} alt="Learning" className={classes.img} />
          </Grid>
        </Grid>

        <Grid container direction={"row"} className={classes.innerContainer3}>
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
                <Typography variant="h3">
                  What is Lucy learning about?
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  component="div"
                  className={classes.text}
                >
                  Most recently, Lucy has been learning how to write songs on
                  the ukulele (until now she’s been using her ukulele in
                  Nativity performances with her children)
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/tv/CIOfxuKpq5y/",
                      "_blank"
                    )
                  }
                >
                  See it for yourself!
                </Button>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <img
              src={ukulele}
              alt="Lucy learning the ukulele"
              className={classes.img}
            />
          </Grid>
        </Grid>
        <div className={classes.innerContainer2}>
          <ScrollingFeedback transparent={false} />
        </div>
      </div>
      <JoinInOptions />
    </>
  );
};

export default Content;
