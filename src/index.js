import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import './style.sass';
import Navbar from './components/Navbar/Navbar';  
import Slider from './components/Slider/Slider';  
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile.js";

class Page extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <Router>
          <Switch>
            <Route exact path="/" component={Slider} />
            <Route exact path="/profile" component={Profile} /> 
          </Switch>
        </Router>

      <Footer />
      </div>
      
    );
  }
}



ReactDOM.render(
  <Page />,
  document.getElementById('root')
)

