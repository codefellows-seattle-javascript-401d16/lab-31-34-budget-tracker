export default (state = {}, action) => {
  let { type, payload } = action

  console.log('expense state', state)

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

  case 'EXPENSE_DELETE':
    return state[payload.categoryID].filter(item => item.id !== payload.id)

  default:
    return state
  }
}
