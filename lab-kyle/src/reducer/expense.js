let validateCategory = category => {
  if (!category.name || !category.budget || !category.id || !category.timestamp)
    throw new Error('Category must have a name, budget, id, and timestamp.')
}
let validateExpense = expense => {
  if (
    !expense.name ||
    !expense.price ||
    !expense.id ||
    !expense.categoryID ||
    !expense.timestamp
  )
    throw new Error(
      'Expense must have a name, price, id, categoryID, and timestamp'
    )
}

export default (state = {}, action) => {
  let { type, payload } = action

  switch (type) {
  case 'CATEGORY_CREATE':
    validateCategory(payload)
    return { ...state, [payload.id]: [] }

  case 'CATEGORY_DELETE':
    validateCategory(payload)
    return { ...state, [payload.id]: undefined }

  case 'EXPENSE_CREATE':
    validateExpense(payload)
    return {
      ...state,
      [payload.categoryID]: [...state[payload.categoryID], payload],
    }

  case 'EXPENSE_UPDATE':
    validateExpense(payload)
    return {
      ...state,
      [payload.categoryID]: state[payload.categoryID].map(
        item => (item.id === payload.id ? payload : item)
      ),
    }

  case 'EXPENSE_DELETE':
    validateExpense(payload)
    return {
      ...state,
      [payload.categoryID]: state[payload.categoryID].filter(
        item => item.id !== payload.id
      ),
    }

  default:
    return state
  }
}
