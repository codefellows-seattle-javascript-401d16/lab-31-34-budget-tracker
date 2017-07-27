'use strict'
let intialState = []
export default (state = intialState, action) => {
  let {type, payload} = action
  switch(type){
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]:[]}
    case 'CATEGORY_DELETE':
      return {...state, [payload.id]:undefined}
    case 'EXPENSE_CREATE':
      let {categoryID} = payload
      let categoryExpenses = state[categoryID]
      return {...state, [categoryID]:[...categoryExpenses, payload]}
    case 'EXPENSE_UPDATE':
      return state.map(expense =>
        expense.id = payload.id ? payload : expense)
    // let oldState = state[payload.categoryID].map((expense)=> {
    //     expense.id === payload.id ? payload : expense
    //   })
    //   return {...state, [payload.categoryID]:oldState}
    case 'EXPENSE_DELETE':
      return {...state, [categoryID]:categoryExpenses.filter((expense)=> {
        expense.id !== payload.id
      })}
    default:
      return state
  }
}
