let validatePayload = payload => {
  if(!payload.id || !payload.title || !payload.timeStamp || !payload.price || !payload.categoryId)
    throw new Error('VALIDATION ERROR: An expense must have an ID, a title, a time stamp, a price, and a category ID');
};

let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'EXPENSE_CREATE':
    validatePayload(payload);
    return [...state, payload];
  case 'EXPENSE_UPDATE':
    validatePayload(payload);
    return state.map(expense => expense.id === payload.id ? payload : expense);
  case 'EXPENSE_DELETE':
    validatePayload(payload);
    return state.filter(expense => expense.id !== payload.id);
  default:
    return state;
  }
};
