import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import './style.sass';
import Navbar from './components/navbar';  
import Slider from './components/slider';  
import Footer from './components/footer';

class Page extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <Slider />
      <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
)

