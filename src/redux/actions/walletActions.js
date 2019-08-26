//these action creators below are simple functions that take in an optional payload and return an action
//action object example below
// { type: "ROB_THE_BANK", payload }
//an action type should be clear in what it is doing it will be used to determine how state gets changed inside of the reducers.
//by dispatching actions we can than target a specific or multiple reducers to update state
//it's common to see a file of action creators for each reducer you have.
//when dispatched an action can cause a state change in more than one reducer as long as the type matches in each reducer.
export const robTheBank = (payload) => ({
  type: 'ROB_THE_BANK',
  payload
})


