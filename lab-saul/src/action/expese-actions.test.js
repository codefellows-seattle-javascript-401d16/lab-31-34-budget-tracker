import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
  expenseReset,
} from './expense-actions.js';

describe('testing expense actions', () => {
  test('expenseCreate returns a EXPENSE_CREATE action', () => {
    let action = expenseCreate({name: 'cool'});
    expect(action.type).toEqual('EXPENSE_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.name).toBe('cool');
  });

  test('expenseDelete returns a EXPENSE_DELETE action and the mockCategory', () => {
    let mockCategory = {id: '124', timestamp: new Date() , name: 'cool'};
    let action = expenseDelete(mockCategory);
    expect(action).toEqual({
      type: 'EXPENSE_DELETE',
      payload: mockCategory,
    });
  });

  test('expenseUpdate returns a EXPENSE_UPDATE action and the mockCategory', () => {
    let mockCategory = {id: '124', timestamp: new Date() , name: 'cool'};
    let action = expenseUpdate(mockCategory);
    expect(action).toEqual({
      type: 'EXPENSE_UPDATE',
      payload: mockCategory,
    });
  });

  test('expenseReset returns a EXPENSE_RESET action', () => {
    let action = expenseReset();
    expect(action).toEqual({
      type: 'EXPENSE_RESET',
    });
  });
});
