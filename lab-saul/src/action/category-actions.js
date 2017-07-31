import uuid from 'uuid/v1';

export const categoryCreate = (category) => ({
    type: 'CATEGORY_CREATE',
    payload: {
      ...category,
      id: uuid(),
      timestamp: new Date(),
    },
});

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: {...category},
});

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: {...category},
});

export const categoryReset = () => ({
  type: 'CATEGORY_RESET'
});
