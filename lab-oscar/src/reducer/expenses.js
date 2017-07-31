let validateCategory = (payload) => {
  if(!payload.id)
    throw new Error('VALIDATION ERROR: category must have an id')
}

let validateExpenses = (payload) => {
  if(!payload.id || !payload.expenseName || !payload.price)
    throw new Error('VALIDATION ERROR: Expenses must have an ID, timestamp, Name and Price')
}

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
    case 'CATEGORY_CREATE':
      validateCategory(payload)
      return {...state, [payload.id]: []}
      break;
    case 'CATEGORY_DELETE':
      validateCategory(payload)
      return {...state, [payload.id]: undefined}
      break;
    case 'EXPENSE_CREATE':
      validateExpenses(payload)
      let {categoryID} = payload
      let categoryExpenses = state[categoryID]
      return {...state, [categoryID]: [...categoryExpenses, payload]}
      break;
    case 'EXPENSE_DELETE':
      validateExpenses(payload)
      oldState = state[payload.categoryID].filter(expense => expense.id !== payload.id)
      return {...state, [payload.categoryID]: oldState}
      break;
    case 'EXPENSE_UPDATE':
      validateExpenses(payload)
      payload.price = Number(parseFloat(payload.price).toFixed(2));
      let oldState = state[payload.categoryID].map(expense => expense.id === payload.id ? payload : expense)
      return {...state, [payload.categoryID]: oldState}
    default:
      return state;
      break;
  }
}
