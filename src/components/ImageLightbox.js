import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: "15px",
  },
  img: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "cover",
    cursor: "pointer",
  },
  text: {
    cursor: "pointer",
  },
}));

const Content = ({ imageData }) => {
  const classes = useStyles();
  const [imageIndex, setImageIndex] = React.useState(-1);

  const itemWidth = imageData.length > 2 ? 4 : imageData.length > 1 ? 6 : 12;
  return (
    <>
      <Grid container direction="row" alignItems="center">
        {imageData.map((imageItem, i) => {
          return (
            <Grid
              key={imageItem.key !== undefined ? imageItem.key : i}
              container
              item
              direction="column"
              xs={12}
              sm={itemWidth}
              className={classes.item}
              justify="space-between"
              onClick={() => setImageIndex(i)}
            >
              <Grid item>
                <img
                  src={imageItem.img}
                  alt={imageItem.alt || ""}
                  className={classes.img}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" className={classes.text}>
                  {imageItem.text}
                </Typography>
                {/* <Button variant="contained" color="primary">
                  Find out more
                </Button> */}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      {imageIndex >= 0 && (
        <Lightbox
          mainSrc={imageData[imageIndex].img}
          nextSrc={imageData[(imageIndex + 1) % imageData.length]}
          prevSrc={
            imageData[(imageIndex + imageData.length - 1) % imageData.length]
          }
          onCloseRequest={() => setImageIndex(-1)}
          clickOutsideToClose
          onMovePrevRequest={() =>
            setImageIndex(
              (imageIndex + imageData.length - 1) % imageData.length
            )
          }
          onMoveNextRequest={() =>
            setImageIndex((imageIndex + 1) % imageData.length)
          }
        />
      )}
    </>
  );
};

export default Content;
