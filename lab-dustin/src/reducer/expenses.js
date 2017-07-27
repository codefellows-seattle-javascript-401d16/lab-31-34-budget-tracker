'use strict';

let validateCategory = (category) => {
  if(!category.id || !category.title || !category.timestamp)
    throw new Error('VALIDATION ERROR: category must have id, title, and timestamp');
};

let validateExpense = (expense) => {
  console.log('*********', expense);
  if(!expense.id || !expense.title || !expense.categoryID)
    throw new Error('VALIDATION ERROR: expense must have id, title, and categoryID');
};

let intialState = {};
export default (state=intialState, action) => {
  let {type, payload} = action;
  let categoryID, categoryExpenses;

  switch(type){
  case 'CATEGORY_CREATE':
    validateCategory(payload);
    return {...state, [payload.id]: []};

  case 'CATEGORY_DELETE':
    validateCategory(payload);
    return {...state, [payload.id]: undefined};

  case 'EXPENSE_CREATE':
    validateExpense(payload);
    categoryID = payload.categoryID;
    categoryExpenses = state[categoryID];
    console.log('//////////////////', state);
    return {...state, [categoryID]: [...categoryExpenses, payload]};

  case 'EXPENSE_UPDATE':
    validateExpense(payload);
    categoryID = payload.categoryID;
    categoryExpenses = state[categoryID];
    return {...state,
      [categoryID]: categoryExpenses.map(expense =>
        expense.id === payload.id ? payload : expense),
    };

  case 'EXPENSE_DELETE':
    validateExpense(payload);
    categoryID = payload.categoryID;
    categoryExpenses = state[categoryID];
    return {...state,
      [categoryID]: categoryExpenses.filter(expense =>
        expense.id !== payload.id),
    };

  default:
    return state;
  }
};
