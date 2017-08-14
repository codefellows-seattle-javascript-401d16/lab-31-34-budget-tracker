import uuid from 'uuid/v1';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../action/category-actions.js';

describe('Testing category actions...', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({name: 'car payment', budget: 450});
    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.name).toEqual('car payment');
    expect(action.payload.budget).toEqual(450);
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.id).toBeTruthy();
  });
  test('categoryUpdate modifies the category created above', () => {
    let mockCategory = {
      id: uuid(),
      timestamp: new Date(),
      name: 'car payment',
      budget: 450,
    };
    let action = categoryUpdate(mockCategory);
    expect(action.type).toEqual('CATEGORY_UPDATE');
  });
  test('categoryDelete removes a category', () => {
    let mockCategory = {
      id: uuid(),
      timestamp: new Date(),
      name: 'car payment',
      budget: 450,
    };
    let action = categoryDelete(mockCategory);
    expect(action.type).toEqual('CATEGORY_DELETE');
  });
});
