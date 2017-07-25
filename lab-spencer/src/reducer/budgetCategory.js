let initialState = [];

export default (state = initialState, action) => {
  console.log(state);
  let {type, payload} = action;

  switch(type) {
  case 'BUDGET_CATEGORY_CREATE':
    return [...state, payload];
  case 'BUDGET_CATEGORY_UPDATE':
    return state.map(budgetCategory => budgetCategory.id === payload.id ? payload : budgetCategory);
  case 'BUDGET_CATEGORY_DELETE':
    return state.budgetCategories.filter(budgetCategory => budgetCategory.id !== payload.id);
  default:
    return state;
  }
};
