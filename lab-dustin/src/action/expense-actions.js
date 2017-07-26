import uuid from 'uuid/v1'

//

export const expenseCreate = (expense) => {
  expense.id = uuid(),
  expense.timestamp = new Date()
  // categoryID =
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  }
}

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
})

export const expenseDelete = (expense) => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
})

export const categoryCreate = (category) => {
  category.id = uuid()
  category.editing
  category.timestamp = new Date()
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
})
