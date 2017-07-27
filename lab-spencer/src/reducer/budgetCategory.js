let validatePayload = payload => {
  if(!payload.id || !payload.title || !payload.timeStamp || !payload.budget)
    throw new Error('VALIDATION ERROR: A budget category must have an ID, a title, a time stamp, and a budget');
};

let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'BUDGET_CATEGORY_CREATE':
    validatePayload(payload);
    return [...state, payload];
  case 'BUDGET_CATEGORY_UPDATE':
    validatePayload(payload);
    return state.map(budgetCategory => budgetCategory.id === payload.id ? payload : budgetCategory);
  case 'BUDGET_CATEGORY_DELETE':
    validatePayload(payload);
    return state.budgetCategories.filter(budgetCategory => budgetCategory.id !== payload.id);
  default:
    return state;
  }
};
