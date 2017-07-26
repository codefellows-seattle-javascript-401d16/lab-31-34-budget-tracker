let initialState = {};
export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){
  case 'CATEGORY_CREATE':
    return {...state, [payload.id]: []};


  case 'EXPENSE_CREATE':

    let {boardID} = payload;
    let categoryExpenses = state[categoryID];
    return {...state, [categoryID]: [...categoryExpenses, payload]};

  default:
    return state;
  }
};
