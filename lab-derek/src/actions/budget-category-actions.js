import React from 'react';
import uuid from 'uuid/v1';

export const budgetCreate = category => {
  category.id = uuid();
  category.timeStamp = new Date();
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const budgetUpdate = category => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const budgetDelete = category => {
  return {
    type: 'CATEGORY_DELETE',
    payload: category,
  };
};
