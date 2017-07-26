import uuid from 'uuid/v1';

export const expenseCreate = (expense) => ({
  type: 'EXPENSE_CREATE',
  payload: {...expense, id:uuid()},
});
