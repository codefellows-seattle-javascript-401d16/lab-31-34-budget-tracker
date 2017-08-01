let validateCategory = (category) => {
  if(!category.id || !category.name || !category.budget)
    throw new Error('VALIDATION ERROR: category must have name, budget, and id');
};

let validateExpense = (expense) => {
  if(!expense.id || !expense.name || !expense.price)
    throw new Error('VALIDATION ERROR: expense must have name, price, and id');
};

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE':
    validateCategory(payload);
    return {...state, [payload.id]: []};

  case 'CATEGORY_DELETE':
    validateCategory(payload);
    return {...state, [payload.id]: undefined};

  case 'EXPENSE_CREATE':
    console.log('payload', payload);
    validateExpense(payload);
    let {categoryID} = payload;
    let categoryExpenses = [...state[categoryID]];
    return {...state, [categoryID]: [...categoryExpenses, payload]};

  case 'EXPENSE_UPDATE':
    validateExpense(payload);
    return {...state, [payload.categoryID]: state[payload.categoryID].map(
      expense => expense.id === payload.id ? payload : expense)};

  case 'EXPENSE_DELETE':
    validateExpense(payload);
    return {...state, [payload.categoryID]: state[payload.categoryID].filter(
      expense => expense.id !== payload.id)};

  default:
    return state;
  }
};
