let intialState = {}
export default (state=intialState, action) => {
  let {type, payload} = action
  switch(type){
    case 'EXPENSE_CREATE':
      return {...state, [payload.id]: []}

    case 'EXPENSE_DELETE':
      return {...state, [payload.id]: undefined}

    case 'EXPENSE_CREATE':
      let {budgetID} = payload
      let budgetExpenses = state[budgetID]
      return {...state, [budgetID]: [...budgetExpenses, payload]}


    default:
      return state;
  }
}
