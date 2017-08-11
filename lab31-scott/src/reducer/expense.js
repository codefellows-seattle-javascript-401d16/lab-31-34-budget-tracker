//validate the payload for the expenses. Category id is already validated so it shouldn't be necessary here.
let expenseValidator = (payload) => {
  if(!payload.id) throw new Error('validation failed: expense must have an ID');
  if(!payload.categoryID) throw new Error('validation failed: expense must have a categoryID');
  if(!payload.timestamp) throw new Error('validation failed: expense must have a timestamp');
  if(!payload.title) throw new Error('validation failed: expense must have a title');
  if(!payload.amount) throw new Error('validation failed: expense must have an amount');
};

let initialState={};

export default (state = initialState, action) => {
  let {type, payload} = action;
  let categoryID, categoryExpenses;

  switch(type){
  case 'CATEGORY_CREATE':
    //anytime a category is created, spread the state properties, add a property that's the id from the payload, set the value to an empty array. Keep it all in an object
    return {...state, [payload.id]: []};

  case 'CATEGORY_DESTROY':
    //anytime a category is destroyed, remove all expenses from array by setting to undefined.
    return {...state, [payload.id]: []};

  case 'EXPENSE_CREATE':
    expenseValidator(payload);
    //when an expense is created, get the categoryID from the payload
    console.log('payload: ', payload);
    categoryID = payload.categoryID;
    //get the array of expenses from the category state
    categoryExpenses = state[categoryID];
    //spread the state object, concat the new payload/expense to the end of the other expenses at the category id property.
    return {...state, [categoryID]: [...categoryExpenses, payload]};

  case 'EXPENSE_UPDATE':
    expenseValidator(payload);
    categoryID = payload.categoryID;
    categoryExpenses = state[categoryID];
    console.log('categoryexp: ', categoryExpenses);
    return {...state, [categoryID]: categoryExpenses.map(expense => {
      return expense.id === payload.id ? payload : expense;}),
    };

  case 'EXPENSE_DESTROY':
    console.log('PAYLOAD: ', payload);
    console.log('STATE: ', state);
    // expenseValidator(payload);
    categoryID = payload.categoryID;
    console.log('STATE cat: ', state[categoryID]);
    console.log('PCID: ', payload.categoryID);
    categoryExpenses = state[categoryID];
    return {...state, [categoryID]: categoryExpenses.filter(expense => {
      return expense.id !== payload.id;}),
    };

  default: return state;
  }
};
