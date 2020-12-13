import React from "react";
import { makeStyles } from "@material-ui/core";
import ImageLightbox from "./ImageLightbox";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "0 20px 0 20px",
  },
}));

const Content = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ImageLightbox imageData={data} />
    </div>
  );
};

export default Content;
