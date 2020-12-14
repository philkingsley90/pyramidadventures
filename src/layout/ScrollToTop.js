import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

const scrollToSection = () => {
  const hash = decodeURIComponent(window.location.hash);
  const index = hash.lastIndexOf("#");
  if ((index > 0) & (index + 1 < hash.length)) {
    const elementId = hash.substring(index + 1).replace(/\//g, "");
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView();
        window.scrollBy(0, -100); // Adjusts for the nav bar
      }
    }, 800);
  }
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
