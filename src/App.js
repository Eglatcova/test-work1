import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

const App = ({ history }) => {
  return (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route history={history} path="/home" component={Slider} />
      <Route history={history} path="/profile" component={Profile} />
      <Redirect from="/" to="/home"/>
    </Switch>
    <Footer />
  </React.Fragment>
  );
}

export default withRouter(App);
