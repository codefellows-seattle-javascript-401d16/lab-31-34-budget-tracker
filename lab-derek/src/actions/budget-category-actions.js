import React from 'react';
import uuid from 'uuid/v1';

export const budgetCreate = budgetCategory => {
  budgetCategory.id = uuid();
  budgetCategory.timeStamp = new Date();
  return {
    type: 'BUDGET_CATEGORY_CREATE',
    payload: budgetCategory,
  };
};

export const budgetUpdate = budgetCategory => {
  return {
    type: 'BUDGET_CATEGORY_UPDATE',
    payload: budgetCategory,
  };
};

export const budgetDelete = budgetCategory => {
  return {
    type: 'BUDGET_CATEGORY_DELETE',
    payload: budgetCategory,
  };
};
