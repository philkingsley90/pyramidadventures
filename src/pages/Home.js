import React from "react";
// import { makeStyles } from "@material-ui/core";
import SummaryOfPages from "../components/PagesSummary";
import JoinInOptions from "../components/JoinInSummary";

// const useStyles = makeStyles((theme) => ({}));

const Content = () => {
  // const classes = useStyles();

  return (
    <>
      <SummaryOfPages />
      <JoinInOptions />
    </>
  );
};

export default Content;
