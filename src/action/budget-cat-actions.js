import uuid from 'uuid/v1';

export const budgetCreate = budget => {
  budget.id = uuid();
  budget.timeStamp = new Date();
  return {
    type: 'BUDGET_CREATE',
    payload: budget,
  };
};

export const budgetUpdate = budget => ({
  type: 'BUDGET_UPDATE',
  payload: budget,
});


export const budgetDelete = budget => ({
  type: 'BUDGET_DELETE',
  payload: budget,
});
