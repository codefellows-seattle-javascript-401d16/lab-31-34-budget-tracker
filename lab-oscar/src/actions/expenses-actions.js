import uuid from 'uuid/v1';
import Moment from 'moment';

export const expenseCreate = (expense) => {
  expense.id = uuid();
  expense.timestamp = Moment();
  expense.price = Number(parseFloat(expense.price).toFixed(2));
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

export const expenseInsert = (expense) => ({
  type: 'EXPENSE_CREATE',
  payload: {...expense},
})
