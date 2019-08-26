const initialState = [];
//THIS IS AN UNUSUAL REDUCER ONLY BEING USED TO SHOW OTHER ACTIONS BEING DISPATCHED
//DO NOT RECREATE

//taking advantage of the fact that every dispatch will call all of the reducers this reducer was used to
//capture each action that was dispatched and push it onto an array to display on the lower right side of the application UI
//this reducer is not looking at any types each time dispatch is called it changes state this would be a rare situation
//but it was useful to show how the application dispatches actions to update state while interacting with the "Bank"
export default (state = initialState, { type, payload }) => {
  return [...state, { type, payload }];
};
