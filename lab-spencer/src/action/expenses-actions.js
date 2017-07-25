import uuid from 'uuid/v1';

export const expenseCreate = expense => {
  expense.id = uuid();
  expense.timeStamp = new Date();
  expense.cost = parseFloat(expense.cost);
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = expense => {
  expense.cost = parseFloat(expense.cost);
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

export const expenseDelete = expense => {
  return {
    type: 'EXPENSE_DELETE',
    payload: expense,
  };
};
