//middleware to log state changes and actions, or an error

let reporter = store => next => action => {
  //log the action that was triggered
  console.log('--ACTION--', action);
  //use a try catch block to invoke the action and log state.
  try {
    //invoke next while passing the action through to get a result.
    let result = next(action);
    //get the new store state with store.getState
    console.log('--STATE-CHANGE--', store.getState());
    //return the result of the action
    return result;
  } catch(error) {
    //create an action prop on the error object with the action as a value
    error.action = action;
    //log the error that was returned
    console.log('--ERROR--', error);
    return error;
  }
};

export default reporter;
