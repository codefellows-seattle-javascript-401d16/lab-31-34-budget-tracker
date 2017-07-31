import uuid from 'uuid/v1';

export const expenseItemCreate = expense => {
  expense.id = uuid();
  expense.timeStamp = new Date();
  expense.price = parseFloat(expense.price);
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseItemInsert = expense => {
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseItemUpdate = expense => {
  expense.price = parseFloat(expense.price);
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

export const expenseItemDelete = expense => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
});
