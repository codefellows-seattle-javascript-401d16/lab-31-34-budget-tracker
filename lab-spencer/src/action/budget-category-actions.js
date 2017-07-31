import uuid from 'uuid/v1';

export const budgetCategoryCreate = budgetCategory => {
  budgetCategory.id = uuid();
  budgetCategory.timeStamp = new Date();
  budgetCategory.budget = parseFloat(budgetCategory.budget);
  return {
    type: 'BUDGET_CATEGORY_CREATE',
    payload: budgetCategory,
  };
};

export const budgetCategoryUpdate = budgetCategory => {
  budgetCategory.budget = parseFloat(budgetCategory.budget);
  return {
    type: 'BUDGET_CATEGORY_UPDATE',
    payload: budgetCategory,
  };
};

export const budgetCategoryDelete = budgetCategory => {
  return {
    type: 'BUDGET_CATEGORY_DELETE',
    payload: budgetCategory,
  };
};
