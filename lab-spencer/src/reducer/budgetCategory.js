let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'BUDGET_CATEGORY_CREATE':
    return [...state.budgetCategories, payload];
  case 'BUDGET_CATEGORY_UPDATE':
    return state.budgetCategories.map(budgetCategory => budgetCategory.id === payload.id ? payload : budgetCategory);
  case 'BUDGET_CATEGORY_DELETE':
    return state.budgetCategories.filter(budgetCategory => budgetCategory.id !== payload.id);
  default:
    return state.categories;
  }
};
