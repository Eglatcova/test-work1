import React from "react";
import ReactDOM from "react-dom";
//import { render } from '@testing-library/react';
import "./style.sass";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer, compose( window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));

const history = createBrowserHistory();

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
<Router history={history}>{app}</Router>,
  document.getElementById("root")
);
