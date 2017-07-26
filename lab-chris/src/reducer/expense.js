let intialState = {};

export default (state=intialState, action) => {
  let {type, payload} = action;

  switch(type){
  case 'CATEGORY_CREATE':
    return {...state, [payload.id]: []};

  case 'CATEGORY_DELETE':
    return {...state, [payload.id]: undefined};

  case 'EXPENSE_CREATE':
  {
    let {categoryID} = payload;
    let categoryExpenses = [...state[categoryID]];
    return {...state, [categoryID]: [...categoryExpenses, payload]};
  }



  default:
    return state;
  }
};
