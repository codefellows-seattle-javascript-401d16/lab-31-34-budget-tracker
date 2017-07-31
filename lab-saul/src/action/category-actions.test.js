import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
  categoryReset,
} from './category-actions.js';

describe('testing category actions', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({name: 'cool'});
    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.name).toBe('cool');
  });

  test('categoryDelete returns a CATEGORY_DELETE action and the mockCategory', () => {
    let mockCategory = {id: '124', timestamp: new Date() , name: 'cool'};
    let action = categoryDelete(mockCategory);
    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: mockCategory,
    });
  });

  test('categoryUpdate returns a CATEGORY_UPDATE action and the mockCategory', () => {
    let mockCategory = {id: '124', timestamp: new Date() , name: 'cool'};
    let action = categoryUpdate(mockCategory);
    expect(action).toEqual({
      type: 'CATEGORY_UPDATE',
      payload: mockCategory,
    });
  });

  test('categoryReset returns a CATEGORY_RESET action', () => {
    let action = categoryReset();
    expect(action).toEqual({
      type: 'CATEGORY_RESET',
    });
  });
});
