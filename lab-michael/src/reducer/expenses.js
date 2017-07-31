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
      console.log('state[categoryID]',state[categoryID]);
      return {...state, [categoryID]:[...categoryExpenses, payload]}
    case 'EXPENSE_UPDATE':
    categoryID = payload.categoryID
    console.log('categoryID',categoryID);
    console.log('state_____',state[categoryID]);
    console.log('____STATE',state);
    // category
    return {...state, [categoryID]: state[categoryID].map(expense => (expense.id== payload.id ? payload : expense)
    )}
    case 'EXPENSE_DELETE':
    categoryID = payload.categoryID
      return {...state, [categoryID]:state[categoryID].filter((expense)=> {
        expense.id !== payload.id
      })}
    default:
      return state
  }
}
