import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore"; //import being used to call createStore()
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

//this import from line 6 is a function that returns a call to createStore with arguments for the rootReducer and middleware/enhancements
const store = configureStore();

//below we are wrapping our entire application with our react-redux provider to provide the store to all sub components that connect to the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
