import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from "./layout/AppNavBar";
import Footer from "./layout/Footer";
import ScrollToTop from "./layout/ScrollToTop";
// import Instagram from "./components/Instagram";
// import CookieBanner from "./components/CookieBanner";
// import PageLanding from "./components/PageLanding";
import PageStore from "./pages/PageStore";
import Page from "./pages/Page";
import "./App.css";
import { observer } from "mobx-react";
import Instagram from "./components/Instagram";

const App = observer(() => {
  const content = (
    <ScrollToTop>
      <Switch>
        {PageStore.getPaths().map((path) => (
          <Route exact path={path} key={path}>
            <Page path={path} />
          </Route>
        ))}
      </Switch>
    </ScrollToTop>
  );

  return (
    <Router basename="/">
      <AppNavBar />
      {content}
      <Instagram />
      <Footer />
      {/* <CookieBanner /> */}
    </Router>
  );
});

export default App;
