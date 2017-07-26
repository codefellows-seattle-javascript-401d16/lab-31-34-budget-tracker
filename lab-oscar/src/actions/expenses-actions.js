import uuid from 'uuid/v1';
import Moment from 'moment';

export const expenseCreate = (expense) => {
  expense.id = uuid();
  expense.timestamp = Moment();
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  }
}

export const expenseDelete = (expense) => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
})

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
})

//
// export const categoryDelete = (category) => ({
//   type: 'CATEGORY_DELETE',
//   payload: category,
// })
//
// export const categoryUpdate = (category) => ({
//   type: 'CATEGORY_UPDATE',
//   payload: category,
// })
