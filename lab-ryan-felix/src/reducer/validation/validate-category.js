const validateCategory = (payload) => {
  if(!payload.id)
    throw new Error('Validation Error: category id is absent.');
  if(!payload.name)
    throw new Error('Validation Error: category name is absent.');
  if(!payload.timestamp)
    throw new Error('Validation Error: category timestamp is absent.');
  console.log('Category validated.');
};

export default validateCategory;
