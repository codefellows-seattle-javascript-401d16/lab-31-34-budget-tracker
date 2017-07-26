import uuid from 'uuid/v1';

export const expenseCreate = (expense) => {
  expense.id = uuid();
  expense.timestamp = new Date();
  console.log('Expense Action', expense);
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const expenseDelete = (expense) => {
  console.log('Expense Delete', expense);
  return {
    type: 'EXPENSE_DELETE',
    payload: expense,
  };
};
