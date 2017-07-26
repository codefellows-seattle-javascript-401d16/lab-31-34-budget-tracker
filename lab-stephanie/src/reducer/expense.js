let initialState = {}

export default (state = initialState, action) => {
  let { type, payload } = action
  switch (type) {
  case 'CATEGORY_CREATE':
    return { ...state, [payload.id]: [] }

  case 'CATEGORY_DELETE':
    return { ...state, [payload.id]: undefined }

  case 'EXPENSE_CREATE': {
    let { categoryId } = payload
    let categoryExpenses = [...state[categoryId]]
    return { ...state, [categoryId]: [...categoryExpenses, payload] }
  }
  case 'EXPENSE_UPDATE': {
    let { categoryId } = payload
    let categoryExpenses = [...state[categoryId]]
    return {
      ...state,
      [categoryId]: categoryExpenses.map(
        expense => (expense.id == payload.id ? payload : expense)
      ),
    }
  }
  case 'EXPENSE_DELETE': {
    let { categoryId } = payload
    let categoryExpenses = [...state[categoryId]]
    console.log('payload', payload)
    console.log('categoryExpenses', categoryExpenses)
    console.log('categoryId', categoryId)
    return {
      ...state,
      [categoryId]: categoryExpenses.filter(
        expense => expense.id !== payload.id
      ),
    }
  }

  default:
    return state
  }
}
