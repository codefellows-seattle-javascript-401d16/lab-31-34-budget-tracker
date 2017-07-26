import uuid from 'uuid/v1';
import {Category} from './action-names.js';

export const createCategory = (category) => ({
  type: Category.CREATE,
  payload: {
    ...category,
    id: uuid(),
    timestamp: new Date(),
  },
});

export const updateCategory = (category) => ({
  type: Category.UPDATE,
  payload: {
    ...category,
    timestamp: new Date(),
  },
});

export const deleteCategory = (category) => ({
  type: Category.DELETE,
  payload: category,
});
