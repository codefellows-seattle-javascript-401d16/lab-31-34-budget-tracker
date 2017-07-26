'use strict'

let intialState = {}
export default (state=intialState, action) => {
  let {type, payload} = action
  switch(type){
  case 'CATEGORY_CREATE':
    return {...state, [payload.id]: []}

  case 'CATEGORY_DELETE':
    return {...state, [payload.id]: undefined}

  case 'EXPENSE_CREATE':
    return {...state, payload}

  case 'EXPENSE_UPDATE':
    return state.map(expense =>
      expense.id ==payload.id ? payload : expense)

  case 'EXPENSE_DELETE':
    return state.filter(expense => expense.id !== payload.id)
  default:
    return state
  }
}
