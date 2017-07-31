import {
  budgetCategoryCreate,
  budgetCategoryUpdate,
  budgetCategoryDelete,
} from '../src/action/budget-category-actions.js';

describe('Testing budget category actions', () => {
  test('true', () => {
    expect(true).toBe(true);
  });

  test('budgetCategoryCreate returns a BUDGET_CATEGORY_CREATE', () => {
    let action = budgetCategoryCreate({title: 'yooo', budget: 42});
    expect(action.type).toEqual('BUDGET_CATEGORY_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timeStamp).toBeTruthy();
    expect(action.payload.title).toBe('yooo');
    expect(action.payload.budget).toBe(42);
  });

  test('budgetCategoryDelete returns a BUDGET_CATEGORY_DELETE', () => {
    let mockBudgetCategory = {id: '444', timeStamp: new Date(), title: 'apples', budget: 555};
    let action = budgetCategoryDelete(mockBudgetCategory);
    expect(action).toEqual({
      type: 'BUDGET_CATEGORY_DELETE',
      payload: mockBudgetCategory,
    });
  });

  test('budgetCategoryUpdate returns a BUDGET_CATEGORY_UPDATE', () => {
    let mockBudgetCategory = {id: '444', timeStamp: new Date(), title: 'apples', budget: 555};
    let action = budgetCategoryUpdate(mockBudgetCategory);
    expect(action).toEqual({
      type: 'BUDGET_CATEGORY_UPDATE',
      payload: mockBudgetCategory,
    });
  });
});
