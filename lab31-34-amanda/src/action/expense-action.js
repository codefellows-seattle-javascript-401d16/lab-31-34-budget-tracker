import uuid from 'uuid/v1';

export const expenseCreate = (category) => {
  category.id = uuid();
  category.timestampe = new Date();
  return{
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = (category) => {
  return {
    type: 'EXPENSE_UPDATE',
    payoad: expense,
  };
};
