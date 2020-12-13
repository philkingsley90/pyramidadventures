import React from "react";
import { Grid, makeStyles, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container1: {
    ...theme.sections.primary,
  },
  container2: {
    ...theme.sections.primary,
  },
  smallItem: {
    lineHeight: 0,
    "& *": {
      lineHeight: 1.43,
    },
  },
  largeItem: {
    lineHeight: 0,
    "& *": {
      lineHeight: 1.43,
    },
  },
}));

const pairwise = (arr, func) => {
  const result = [];
  for (var i = 0; i < arr.length - 1; i += 2) {
    result.push(func(arr[i], arr[i + 1], i));
  }
  return result;
};

const ResponsiveGrid = (props) => {
  const classes = useStyles();
  const firstXs = props.firstXs || 6;
  const secondXs = 12 - firstXs;
  return (
    <>
      <Hidden smUp>
        <Grid container>
          {props.children.map((child, i) => {
            const containerClass =
              i % 4 === 0 || i % 4 === 1
                ? classes.container2
                : classes.container1;
            return (
              <Grid
                item
                xs={12}
                key={"small-item-" + i}
                className={containerClass}
              >
                <div className={classes.smallItem}>{child}</div>
              </Grid>
            );
          })}
        </Grid>
      </Hidden>
      <Hidden xsDown>
        <Grid container direction="column">
          {pairwise(props.children, (item1, item2, i) => {
            const firstItem = i % 4 ? item1 : item2;
            const secondItem = i % 4 ? item2 : item1;
            const containerClass =
              i % 4 ? classes.container1 : classes.container2;
            return (
              <Grid
                item
                container
                direction="row"
                key={"large-item-" + i}
                className={containerClass}
              >
                <Grid
                  item
                  xs={firstXs}
                  key={"large-item-" + i + "-1"}
                  className={classes.largeItem}
                >
                  {firstItem}
                </Grid>
                <Grid
                  item
                  xs={secondXs}
                  key={"large-item-" + i + "-2"}
                  className={classes.largeItem}
                >
                  {secondItem}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Hidden>
    </>
  );
};

export default ResponsiveGrid;
