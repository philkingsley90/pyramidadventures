import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import navBarLogo from "../images/logo-icon.jpg";
import PageStore from "../pages/PageStore";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: "10px",
    maxHeight: "40px",
    marginRight: theme.spacing(3),
    cursor: "pointer",
  },
  smMenu: {
    width: "100%",
    height: "100%",
    ...theme.sections.navBar,
  },
  smMenuDrawer: {
    maxWidth: "400px",
    zIndex: "100 !important",
    "& .MuiDrawer-paperAnchorLeft": {
      width: "70%",
      maxWidth: "600px",
    },
  },
  lgMenuContainer: {
    width: "calc(100% + 33px)",
  },
  appBar: {
    ...theme.sections.navBar,
    width: "100%",
    zIndex: 101,
  },
}));

const AppNavBar = observer(() => {
  const classes = useStyles();
  const history = useHistory();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuOpen(open);
  };

  const goToLink = (path) => {
    history.push(path);
  };

  const menuItems = PageStore.getPaths().filter(
    (path) => PageStore.getPage(path).menuTitle
  );

  const smMenu = (
    <Drawer
      open={menuOpen}
      onClose={toggleMenu(false)}
      width="100%"
      height="100%"
      anchor="top"
      className={classes.smMenuDrawer}
    >
      <Toolbar />
      <div
        role="presentation"
        onClick={toggleMenu(false)}
        onKeyDown={toggleMenu(false)}
        className={classes.smMenu}
      >
        <List>
          {menuItems.map((path) => (
            <ListItem
              button
              key={"sm-menu-item-" + PageStore.getPage(path).title}
              onClick={() => goToLink(path)}
            >
              <ListItemText primary={PageStore.getPage(path).title} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
  const smBar = (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid
        item
        onClick={() => {
          history.push("/");
        }}
      >
        <img
          src={navBarLogo}
          alt="Pyramid Adventures"
          className={classes.logo}
        />
      </Grid>
      <Grid item />
      <Grid item>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu(!menuOpen)}
        >
          <MenuIcon />
        </IconButton>
      </Grid>
      {smMenu}
    </Grid>
  );

  const lgBar = (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid
        item
        onClick={() => {
          history.push("/");
        }}
      >
        <img
          src={navBarLogo}
          alt="Pyramid Adventures"
          className={classes.logo}
        />
      </Grid>
      <Grid item>
        <Grid
          container
          alignItems="center"
          spacing={4}
          className={classes.lgMenuContainer}
        >
          {menuItems.map((path) => (
            <Grid item key={"lg-menu-item-" + PageStore.getPage(path).title}>
              <Button color="inherit" onClick={() => goToLink(path)}>
                {PageStore.getPage(path).title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container>
            <Hidden smDown>{lgBar}</Hidden>
            <Hidden mdUp>{smBar}</Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
});

export default AppNavBar;
