import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../action/category-actions.js';

describe('testing category actions', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({name: 'cool'});
    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.name).toBe('cool');
  });
});
