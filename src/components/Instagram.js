import React from "react";
import { makeStyles, Hidden, Button, Typography } from "@material-ui/core";
import Feed from "react-instagram-authless-feed";
import { ErrorBoundary } from "react-error-boundary";

const instagramUrl = "https://www.instagram.com/pyramidadventures";

const instagramContainerStyle = (width, theme) => {
  return {
    "& a": {
      margin: "10px",
      lineHeight: 0,
      border: "10px solid " + theme.palette.primary.main,
      display: "inline-block",
      width: width,
      "& img": {
        width: "100%",
        animation: "fadein 3s",
      },
    },
  };
};

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.sections.instagram,
    width: "100%",
  },
  innerContainer: {
    maxWidth: "1500px",
    margin: "auto",
  },
  instagramContainer: instagramContainerStyle("calc(33% - 20px)", theme),
  instagramContainerSm: instagramContainerStyle("calc(50% - 20px)", theme),
  link: {
    margin: "20px 0 20px 0",
  },
}));

const debug = false;

const Content = () => {
  const classes = useStyles();
  const enabled = process.env.REACT_APP_INSTAGRAM_ENABLED === "true";

  function ErrorFallback({ error, resetErrorBoundary }) {
    return debug ? (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    ) : null;
  }
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Typography variant="h2">Follow us on Instagram</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(instagramUrl, "_blank")}
          className={classes.link}
        >
          @pyramidadventures
        </Button>
        {enabled ? (
          <>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Hidden xsDown>
                <Feed
                  userName="pyramidadventures"
                  className={classes.instagramContainer}
                  classNameLoading="Loading"
                  limit="3"
                />
              </Hidden>
              <Hidden smUp>
                <Feed
                  userName="pyramidadventures"
                  className={classes.instagramContainerSm}
                  classNameLoading="Loading"
                  limit="2"
                />
              </Hidden>
            </ErrorBoundary>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Content;
