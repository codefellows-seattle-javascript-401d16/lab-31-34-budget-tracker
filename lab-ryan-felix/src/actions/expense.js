import uuid from 'uuid/v1';
import {Expense} from './action-names.js';

export const createExpense = (expense) => ({
  type: Expense.CREATE,
  payload: {
    ...expense,
    id: uuid(),
    timestamp: new Date(),
  },
});

export const updateExpense = (expense) => ({
  type: Expense.UPDATE,
  payload: {
    ...expense,
    timestamp: new Date(),
  },
});

export const deleteExpense = (expense) => ({
  type: Expense.DELETE,
  payload: expense,
});
