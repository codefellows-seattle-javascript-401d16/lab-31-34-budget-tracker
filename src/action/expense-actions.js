import uuid from 'uuid/v1'

export const expenseCreate = (expense) => {
  // expense.id = uuid()
  // expense.timestamp = new Date()
  return {
    type: 'EXPENSE_CREATE',
    payload: {...expense, id: uuid(), timestamp: new Date()},
  }
}

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
})

export const expenseDelete = (expense) => {
  return {
    type: 'EXPENSE_DELETE',
    payload: expense,
  }
}
