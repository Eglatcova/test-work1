import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import './style.sass';
import App from './App';
import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)

