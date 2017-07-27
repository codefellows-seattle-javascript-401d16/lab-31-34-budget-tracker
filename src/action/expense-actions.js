import uuid from 'uuid/v1'

export const expenseCreate = (expense) => ({
  type: 'EXPENSE_CREATE',
  payload: {...expense, id: uuid()},
})

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: {...expense},
})

export const expenseDelte = (expense) => ({
  type: 'EXPENSE_DELETE',
  payload: {...expense},
})
