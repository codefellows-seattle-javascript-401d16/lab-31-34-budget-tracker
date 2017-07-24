import uuid from 'uuid';

export const categoryCreate = (category) => {
  category.id = uuid();
  category.title = 'rent';
  category.timestamp = new Date();
  category.budget = 1400;
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
