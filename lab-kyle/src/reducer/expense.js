export default (state = {}, action) => {
  let { type, payload } = action
  console.log('expense-reducer payload', payload)
  console.log('expense-reducer state', state)
  switch (type) {
  case 'CATEGORY_CREATE':
    return { ...state, [payload.id]: [] }

  case 'CATEGORY_DELETE':
    return { ...state, [payload.id]: undefined }

  case 'EXPENSE_CREATE':
    return {
      ...state,
      [payload.categoryID]: [...state[payload.categoryID], payload],
    }
    // returned array is not save under the categoryid property on app state
    // it is just an array with no key, and comes back undefined.
  case 'EXPENSE_DELETE':
    return state[payload.categoryID].filter(item => item.id !== payload.id)

  default:
    return state
  }
}
