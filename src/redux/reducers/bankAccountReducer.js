//each reducer should be given some intial state here we define a const and set it as the default parameter for the reducer function
//every time an action is dispatched all reducer functions will be called depending on the type property on the action object
//the switch case will route the code execution to update state in different ways
//reducer functions should be pure functions and it's extremely important to not mutate state within the reducer.
//the return value will be used to build the state object for this reducer
const initialState = 2500;

//the first argument of this function has a default parameter if state is undefined
//when the function is called it will use initial state as the value for state
//the second argument of this function destructures type and payload off the provided action object as it takes in the argument.
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "WITHDRAWL_FROM_BANK":
      return state - payload;
    case "DEPOSIT_TO_BANK":
      return state + payload;
    case "FINE_BANK_ACCOUNT":
      return state - payload;
    default:
      return state;
  }
};