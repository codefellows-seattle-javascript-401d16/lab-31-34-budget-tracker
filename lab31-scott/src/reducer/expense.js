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
    //when an expense is created, get the categoryID from the payload
    categoryID = payload.categoryID;
    //get the array of expenses from the category state
    categoryExpenses = state[categoryID];
    //spread the state object, concat the new payload/expense to the end of the other expenses at the category id property.
    return {...state, [categoryID]: [...categoryExpenses, payload]};

  case 'EXPENSE_UPDATE':
    categoryID = payload.categoryID;
    categoryExpenses = state[categoryID];
    console.log('payload: ', payload);
    console.log('categoryexp: ', categoryExpenses);
    return {...state, [categoryID]: categoryExpenses.map(expense => {
      return expense.id === payload.id ? payload : expense;}),
    };

  case 'EXPENSE_DESTROY':
    return categoryExpenses.filter(item => {
      return item.id !== payload.id;
    });

  default: return state;
  }
};
