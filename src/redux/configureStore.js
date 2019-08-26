import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index"; //another way to import this same module is shown below
// import rootReducer from './reducers' //index.js is implied
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  //your combined reducers and any middleware to be used for redux will be used when calling createStore
  //reduxImmutableStateInvariant is a helpful package to let you know if you are mutating state.
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
