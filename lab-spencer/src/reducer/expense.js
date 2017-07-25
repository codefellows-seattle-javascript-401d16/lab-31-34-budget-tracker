let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'EXPENSE_CREATE':
    return [...state.expenses, payload];
  case 'EXPENSE_UPDATE':
    return state.expenses.map(expense => expense.id === payload.id ? payload : expense);
  case 'EXPENSE_DELETE':
    return state.expenses.filter(expense => expense.id !== payload.id);
  default:
    return state.expenses;
  }
};
