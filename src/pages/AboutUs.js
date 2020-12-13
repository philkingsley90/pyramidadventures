import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import cosmicKids from "../images/cosmic-kids-embedded.jpg";
import learning from "../images/learning.jpg";
import ukulele from "../images/ukulele.jpg";
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
    <div className={classes.container}>
      <Container maxWidth="lg" className={classes.innerContainer}>
        <Typography variant="body1" className={classes.text}>
          Lucy is an experienced primary school teacher who is on a mission to
          share the power of yoga with even more children. With Pyramid
          Adventures, children taking part in yoga and teachers embarking on
          CPD, have an enthusiastic, caring, and knowledgeable teacher.
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
                What has Lucy been learning about?
              </Typography>
              <Typography
                variant="body2"
                color="inherit"
                component="div"
                className={classes.textList}
              >
                <ul>
                  <li>‘Yoga on the Lane’ Teacher Immersion</li>
                  <li>Cosmic Kids Yoga Certification</li>
                  <li>
                    Presenting research in collaboration with Bath Spa
                    University at the UKLA in Cardiff and Glasgow
                  </li>
                  <li>UKLA Children’s Book Awards Judge</li>
                  <li>Primary PGCE</li>
                  <li>MA Fine Art</li>
                  <li>Education &amp; Creative Arts BA</li>
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
                These formal accreditations are in addition to Lucy’s other
                learning opportunities she has curated. As a classroom teacher,
                Lucy understood the huge undertaking we ask of our children at
                school everyday … to learn!
              </Typography>
              <Typography
                variant="body2"
                color="inherit"
                className={classes.text}
              >
                This process involves such a variety of skills and emotions;
                joy, frustration, fear, determination, exhaustion and pride can
                be overwhelming emotions as children learn, and this can too
                easily be forgotten by adults.
              </Typography>
              <Typography
                variant="body2"
                color="inherit"
                className={classes.text}
              >
                This is why Lucy is always learning. It’s important that she
                reminds herself of how it feels to be a learner, so she can
                respect and support children that she works with from this
                perspective.
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
              <Typography variant="h3">What is Lucy learning about?</Typography>
              <Typography
                variant="body2"
                color="inherit"
                component="div"
                className={classes.text}
              >
                Most recently, Lucy has been learning how to write songs on the
                ukulele (until now she’s been using her ukulele in Nativity
                performances with her children)
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
    </div>
  );
};

export default Content;
