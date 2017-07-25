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
      console.log('@@@',payload);
      let categoryExpenses = state[categoryID]
      return {...state, [categoryID]: [...categoryExpenses, payload]}
      break;
    default:
      return state;
      break;
  }
}
