import uuid from 'uuid/v1';

export const expenseCreate = (expense) => {
  expense.id = uuid();
  expense.timestamp = '';
  // category.name = '';
  // category.budget = 400;
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
});

export const categoryReset = () => ({type: 'CATEGORY_RESET'});
