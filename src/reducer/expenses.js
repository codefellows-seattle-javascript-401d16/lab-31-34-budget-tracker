let initialState = {}
export default (state=initialState, action) => {
  let {type, payload} = action

  switch(type){
  case 'CATEGORY_CREATE':
    return {...state, [payload.id]: []}

  case 'CATEGORY_DELETE':
    return {...state, [payload.id]: undefined}

  case 'EXPENSE_CREATE':
    console.log('Expense Reducer', payload)
    {
      let {categoryID} = payload
      let categoryExpenses = [...state[categoryID]]
      console.log('Expense Reducer categoryID', categoryID)
      console.log('Expense Reducer categoryExpenses', categoryExpenses)

      return {...state, [categoryID]: [...categoryExpenses, payload]}
    }

  case 'EXPENSE_UPDATE':
    return state.map(expense =>
      expense.id == payload.id ? payload : expense)

  case 'EXPENSE_DELETE':
    return state.filter(expense =>
      expense.id != payload.id)

  default:
    return state
  }
}
