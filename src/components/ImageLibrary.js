import React from "react";
import { makeStyles } from "@material-ui/core";
import homeImg1 from "../images/home-1.jpg";
import { Carousel } from "react-responsive-carousel";

const carouselItems = [
  {
    alt: "Pyramid Adventures Image 1",
    imgSrc: homeImg1,
  },
];

const useStyles = makeStyles((theme) => ({
  carousel: {
    width: "100%",
  },
  carouselImg: {
    width: "100%",
    height: "40vh",
    // height: "calc(100vh - 70px)",
    objectFit: "cover",
  },
}));

const ImageLibrary = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows
        showIndicators={false}
        autoPlay
        stopOnHover
        infiniteLoop
        className={classes.carousel}
        interval={10000}
      >
        {carouselItems.map((item, i) => (
          <img
            key={item.alt}
            src={item.imgSrc}
            className={classes.carouselImg}
            alt={item.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageLibrary;
