export const renderIf = (test, component) =>
  test ? component : undefined;

// takes in object with key value pairs. Truthy valued properties will be put on as a class
export const classToggler = config =>
  Object.keys(config).filter(key => config[key]).join(' ');

// classToggler({
//   'hide': false,
//   'drop-complete': true,
// });
