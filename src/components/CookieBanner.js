import React from "react";
import { makeStyles } from "@material-ui/core";
import CookieConsent from "react-cookie-consent";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#f7f28f",
    fontWeight: "400",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <CookieConsent
      style={{
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: "rgb(53, 53, 53)",
        minHeight: "60px",
        justifyContent: "space-around",
      }}
      buttonClasses="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
      disableButtonStyles
      buttonStyle={{
        margin: "20px",
      }}
    >
      This website uses cookies to enhance the user experience.{" "}
      <a
        href="/cookiepolicy"
        target="_blank"
        rel="noreferrer"
        className={classes.link}
      >
        Cookie Policy
      </a>
    </CookieConsent>
  );
};

export default Content;
