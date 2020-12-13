import React from "react";
import { makeStyles } from "@material-ui/core";
import ResponsiveEmbed from "react-responsive-embed";

const youtubeUrl =
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLP1g1JtnF5zUdN2HfIm6NmLJ0Wgu5T96U";

const useStyles = makeStyles((theme) => ({
  youTube: {
    width: "100%",
    maxWidth: "800px",
    margin: "auto",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.youTube}>
      <ResponsiveEmbed src={youtubeUrl} ratio="16:9" />
    </div>
  );
};

export default Content;
