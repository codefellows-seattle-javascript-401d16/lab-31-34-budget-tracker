let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]: []}
      break;
    case 'CATEGORY_DELETE':
      return {...state, [payload.id]: undefined}
      break;
    case 'EXPENSE_CREATE':
      let {categoryID} = payload
      let categoryExpenses = state[categoryID]
      return {...state, [categoryID]: [...categoryExpenses, payload]}
      break;
    case 'EXPENSE_DELETE':
      oldState = state[payload.categoryID].filter(expense => expense.id !== payload.id)
      return {...state, [payload.categoryID]: oldState}
      break;
    case 'EXPENSE_UPDATE':
      let oldState = state[payload.categoryID].map(expense => expense.id === payload.id ? payload : expense)
      return {...state, [payload.categoryID]: oldState}
    default:
      return state;
      break;
  }
}
