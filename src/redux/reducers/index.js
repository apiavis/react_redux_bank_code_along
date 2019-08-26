import { combineReducers } from "redux"; //this gives us the ability to combine multiple reducers to pass to our createStore function
//the imports below are the 3 reducers this application uses
import bankAccountReducerState from "./bankAccountReducer";
import walletReducerState from "./walletReducer";
import displayDispatchAndStateReducer from "./displayDispatchAndStateReducer";

//combine reducers takes in an object as it's argument
//depending on the property names of this object we will access state differently when calling mapStateToProps
//this rootReducer below looks like so when the application starts(our initialStates defined in each reducer being used)
// {
//  bankAccountReducerState: 2500,
//  walletReducerState: 20,
//  displayDispatchAndStateReducer: []
// }
const rootReducer = combineReducers({
  bankAccountReducerState,
  walletReducerState,
  displayDispatchAndStateReducer
});

//we export the combined reducers to be used when the store is created
export default rootReducer;
