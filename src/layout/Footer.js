import React from "react";
import {
  makeStyles,
  Box,
  IconButton,
  Grid,
  Button,
  Typography,
  Link,
  Hidden,
  Tooltip,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "100%",
    objectFit: "cover",
  },
  container: {
    ...theme.sections.footer,
    padding: "30px 30px 0 30px",
    textAlign: "left",
  },
  copyright: {
    ...theme.sections.footer,
    padding: 10,
    fontSize: 14,
  },
  stayConnectedText: {
    marginBottom: "10px",
  },
  signUpButton: {
    "& span": {
      color: "black",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [showEmail, setShowEmail] = React.useState(false);
  const socialButtons = (
    <>
      <Grid item>
        <Tooltip title="Email">
          <IconButton
            className={classes.iconButton}
            color="inherit"
            aria-label="Email"
            onClick={() => {
              setShowEmail(!showEmail);
            }}
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Instagram">
          <IconButton
            className={classes.iconButton}
            color="inherit"
            aria-label="Instagram"
            onClick={() => {
              window.open("https://www.instagram.com/pyramidadventures");
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Facebook">
          <IconButton
            className={classes.iconButton}
            color="inherit"
            aria-label="Facebook"
            onClick={() => {
              window.open("https://www.facebook.com/pyramidadventuresuk");
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="YouTube">
          <IconButton
            className={classes.iconButton}
            color="inherit"
            aria-label="YouTube"
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UCGl8kgwWT9c_OamLVnfrMow"
              );
            }}
          >
            <YouTubeIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </>
  );

  const signUpEmailSubject = "Sign up";

  const signUpEmailBody = "Please sign me up for news and special offers.";

  const emailAddress = showEmail ? (
    <Grid item>
      <Typography variant="body2">
        <Link href="mailto:pyramidadventures@gmail.com">
          pyramidadventures@gmail.com
        </Link>
      </Typography>
    </Grid>
  ) : null;

  const socialButtonsAndEmail = (justify) => (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Grid container direction="row" justify={justify} alignItems="center">
          {socialButtons}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" justify={justify} alignItems="center">
          <Grid item>{emailAddress}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Grid container className={classes.container} justify="space-between">
        <Grid item sm={6} xs={12}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h5">Be the first in the know</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className={classes.stayConnectedText}>
                Sign up for news and special offers
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href={`mailto:pyramidadventures@gmail.com?subject=${signUpEmailSubject}&body=${signUpEmailBody}`}
                className={classes.signUpButton}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={6}>
            {socialButtonsAndEmail("flex-end")}
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={12}>
            {socialButtonsAndEmail("center")}
          </Grid>
        </Hidden>
      </Grid>

      <Box className={classes.copyright}>
        &#169; {new Date().getFullYear()} Pyramid Adventures
      </Box>
    </>
  );
};

export default Footer;
