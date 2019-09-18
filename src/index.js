import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import About from "./components/About";
import Header from "./components/Header";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
