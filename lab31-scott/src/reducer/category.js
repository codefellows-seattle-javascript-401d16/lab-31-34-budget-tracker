//validation logic to validate the payload for each reducer
let payloadValidator = (payload) => {
  if (!payload.id) throw new Error('validation failed: must have an ID');
  if (!payload.timestamp) throw new Error('validation failed: must have a timestamp');
  if (!payload.name) throw new Error('validation failed: must have a name');
  if (!payload.budget) throw new Error('validation failed: must have a budget');
};

//set initial state to empty array. It will hold all categories as indicies.
let initialState = [];

//export the reducers

export default (state = initialState, action) => {
  //deconstruct type and payload
  let {type, payload} = action;

  switch(type){
  //case for create
  case 'CATEGORY_CREATE':
    payloadValidator(payload);
    return [...state, payload];
  //case for update
  case 'CATEGORY_UPDATE':
    return state.map(item => {
      return item.id === payload.id ? payload : item;
    });
  //case for destroy
  case 'CATEGORY_DESTROY':
    return state.filter(item => {
      return item.id !== payload.id;
    });
  //case for a reset categories to empty array
  case 'CATEGORY_RESET':
    return initialState;

  case 'CATEGORY_AMOUNT_SUBTRACT':
    console.log('state:', state);
    console.log('expense PL: ', payload);
    return state.map(category => {
      return category.id === payload.categoryID ? {...category, budget: category.budget - parseInt(payload.amount)} : category;
    });

  case 'CATEGORY_AMOUNT_ADD':
    console.log('state:', state);
    console.log('expense PL: ', payload);

    return state.map(category => {
      return category.id === payload.categoryID ? {...category, budget: category.budget + parseInt(payload.amount)} : category;
    });

  //set a default to return the state incase it doesn't match any case
  default: return state;
  }
};
