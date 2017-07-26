let initialState = {};
export default (state=initialState, action) => {
  let {type, payload} = action;
  let categoryID, categoryExpense;

  switch(type){
  case 'CATEGORY_CREATE':
    return {...state, [payload.id]: []};

  case 'EXPENSE_CREATE':
    categoryID = payload.categoryID;
    categoryExpense = state[categoryID];

    return {...state,[categoryID]: [...categoryExpense, payload]};

  default: return state;
  }
};
