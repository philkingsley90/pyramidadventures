import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

const scrollToSection = () => {
  const hash = window.location.hash.replace("#", "");
  setTimeout(() => {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView();
      window.scrollBy(0, -100); // Adjusts for the nav bar
    }
  }, 400);
};

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    scrollToSection();
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      scrollToSection();
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
};

export default withRouter(ScrollToTop);
