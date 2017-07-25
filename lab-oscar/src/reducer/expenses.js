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
    case 'CARD_CREATE':
      let {categoryID} = payload
      let catogoryExpenses = state[categoryID]
      return {...state, [categoryID]: [...categoryExpenses, payload]}
      break;
    default:
      return state;
      break;
  }
}
