import React from "react";
import { Container, makeStyles, Typography, Button } from "@material-ui/core";
import PackagesSummary from "../components/PackagesSummary";
// import ScrollingFeedback from "../components/ScrollingFeedback";
import youtubeInteractiveImg from "../images/youtube-interactive.jpg";

import yogaStoryTellingSessionImg from "../images/yoga-story-telling-session.jpg";
import yogaForeverImg from "../images/yoga-forever.jpg";
import yogaExtravaganzaImg from "../images/yoga-extravaganza.jpg";

import faceToFaceTeach from "../images/face-to-face-teach.jpg";
import faceToFaceCpd from "../images/face-to-face-cpd.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.sections.primary,
    textAlign: "left",
  },
  container2: {
    ...theme.sections.secondary,
    textAlign: "left",
  },
  content: {
    textAlign: "left",
    padding: "40px",
    height: "100%",
  },
  title: {
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
  },
  itemImg: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  onlinePackages: {
    width: "100%",
    maxWidth: "800px",
    cursor: "pointer",
  },
  gladfestEyePillow: {
    width: "100%",
    maxWidth: "700px",
  },
  list: {
    textAlign: "left",
    maxWidth: "980px",
    margin: "auto",
    padding: "10px",
  },
  img: {
    width: "calc(100% - 40px)",
    height: "calc(100% - 40px)",
    margin: "20px",
    objectFit: "cover",
    maxHeight: "calc(100vh - 65px)",
    cursor: "pointer",
  },
  emailButton: {
    marginTop: "20px",
    "& span": {
      color: "black",
    },
  },
  summary: {
    textAlign: "center",
  },
}));

const emailSubject = "Hello";

const emailBody = "";

const onlinePackageImgs = [
  {
    img: yogaStoryTellingSessionImg,
    alt: "Story Telling Yoga Session",
  },
  {
    img: yogaForeverImg,
    alt: "Yoga Forever Package",
  },
  {
    img: yogaExtravaganzaImg,
    alt: "Yoga Storytelling Extravaganza Package",
  },
];

const faceToFacePackageImgs = [
  {
    img: faceToFaceTeach,
    alt: "Teach your children package",
  },
  {
    img: faceToFaceCpd,
    alt: "Teach the teachers package",
  },
];

const Content = () => {
  const classes = useStyles();

  const getInTouch = (
    <Button
      variant="contained"
      color="primary"
      href={`mailto:pyramidadventures@gmail.com?subject=${emailSubject}&body=${emailBody}`}
      className={classes.emailButton}
    >
      Get in touch
    </Button>
  );

  return (
    <>
      <div className={classes.container}>
        <Container maxWidth="lg">
          <Typography variant="body1" className={classes.summary}>
            Whatever your motivation for introducing your children to yoga, Lucy
            has packages that can suit you. She can deliver one off yoga
            storytelling adventures, a sequence of sessions to nurture your very
            own little yogi storytellers, or CPD sessions for staff to embed
            yoga and wellness practices into your day to day.
          </Typography>
        </Container>
        {/* <ScrollingFeedback /> */}
      </div>

      <div id="youtube" className={classes.container2}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={classes.title}>
            {"Youtube"}
          </Typography>
          <Typography variant="body2" color="inherit" className={classes.text}>
            Beam some Pyramid Adventures magic into your space. It’s an
            unverified claim, but it is very possibly true...
          </Typography>
          <Typography variant="body2" color="inherit" className={classes.text}>
            Introducing … THE WORLD’S FIRST EVER INTERACTIVE YOGA STORYTELLING
            VIDEO! What happens in the adventure … you decide!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UCGl8kgwWT9c_OamLVnfrMow/playlists"
              );
            }}
          >
            Go to YouTube Now!
          </Button>
          <img
            src={youtubeInteractiveImg}
            alt={"Interactive yoga on YouTube"}
            className={classes.img}
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UCGl8kgwWT9c_OamLVnfrMow/playlists"
              );
            }}
          />
        </Container>
      </div>

      <div id="online-packages" className={classes.container}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={classes.title}>
            Online Packages
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Too far from Gloucestershire or COVID not allowing any visitors?
          </Typography>
          <Typography variant="body1" className={classes.text}>
            No need to fear, Pyramid Adventures can Zoom into your setting with
            the magic of yoga.
          </Typography>
          {getInTouch}
        </Container>
        <PackagesSummary data={onlinePackageImgs} />
      </div>

      <div id="face-to-face" className={classes.container2}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={classes.title}>
            Face to Face Packages
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Pyramid Adventures visits educational settings for two main reasons.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            1. To teach yoga to children.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            2. To teach and empower practitioners to embed the good practices of
            yoga and mindfulness into their settings.
          </Typography>
          {getInTouch}
        </Container>
        <PackagesSummary data={faceToFacePackageImgs} />
      </div>
    </>
  );
};

export default Content;
