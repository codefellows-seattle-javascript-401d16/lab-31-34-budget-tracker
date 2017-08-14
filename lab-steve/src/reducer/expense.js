let initialState = [];
export default (state=initialState, action) => {
  let {type, payload} = action;
  switch(type) {
  case 'CATEGORY_CREATE':
    return {...state, [payload.id]: []};
  case 'CATEGORY_DELETE':
    return {...state, [payload.id]: undefined};
  case 'EXPENSE_CREATE':
    let {categoryID} = payload;
    let categoryExpense = state[categoryID];
    return {...state, [categoryID]: [...categoryExpense, payload]};

  default:
    return state;
  }
};
