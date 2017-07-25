let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'BUDGET_CATEGORY_CREATE':
    return [...state, payload];

  case 'BUDGET_CATEGORY_UPDATE':
    return state.map(budgetCategory => budgetCategory.id === payload.id ? payload : budgetCategory);

  case 'BUDGET_CATEGORY_DELETE':
    return state.filter(budgetCategory => budgetCategory.id !== payload.id);

  case 'BUDGET_CATEGORY_RESET':
    return initialState;

  default:
    return state;
  }
};
