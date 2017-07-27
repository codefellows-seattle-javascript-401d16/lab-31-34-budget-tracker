const reduxReporterMiddleware = store => next => action => {
  console.log('Action: ', action);
  try {
    const result = next(action);
    console.log('State: ', result);
    return result;
  } catch(error) {
    error.action = action;
    console.log('Error!');
    console.error(error);
    return error;
  }
};

export default reduxReporterMiddleware;
