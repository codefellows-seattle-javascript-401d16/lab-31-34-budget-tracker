let validateCategory = (category) => {
  if(!category.id || !category.title || !category.timestamp)
    throw new Error('VALIDATION ERROR: category must have id, title, and timestamp');
};

let validateCard = (expense) => {
  if(!expense.id || !expense.expense || !expense.categoryID)
    throw new Error('VALIDATION ERROR: expense must have id, content, and categoryID');
};

let intialState = {};
export default (state=intialState, action) => {
  let {type, payload} = action;
  let categoryID, categoryCards;
  switch(type){
  case 'CATEGORY_CREATE':
    validateCategory(payload);
    return {...state, [payload.id]: []};

  case 'CATEGORY_DELETE':
    validateCategory(payload);
    return {...state, [payload.id]: undefined};

  case 'EXPENSE_CREATE':
    validateCard(payload);
    categoryID = payload.categoryID;
    categoryCards = state[categoryID];
    return {...state, [categoryID]: [...categoryCards, payload]};

  case 'EXPENSE_UPDATE':
    validateCard(payload);
    categoryID = payload.categoryID;
    categoryCards = state[categoryID];
    return {
      ...state,
      [categoryID]: categoryCards.map(expense =>
        expense.id === payload.id ? payload : expense),
    };

  case 'EXPENSE_DELETE':
    validateCard(payload);
    categoryID = payload.categoryID;
    categoryCards = state[categoryID];
    return {
      ...state,
      [categoryID]: categoryCards.filter(expense =>
        expense.id !== payload.id ),
    };

  default:
    return state;
  }
};
