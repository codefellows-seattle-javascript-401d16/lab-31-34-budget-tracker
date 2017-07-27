export const renderIf = (test, component) =>
  test ? component : undefined;

// takes in object with key value pairs. Truthy valued properties will be put on as a class
export const classToggler = config =>
  Object.keys(config).filter(key => config[key]).join(' ');

// classToggler({
//   'hide': false,
//   'drop-complete': true,
// });

export const log = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) =>
  __DEBUG__ ? console.error(...args) : undefined;
