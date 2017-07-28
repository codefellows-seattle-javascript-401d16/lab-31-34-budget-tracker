import {
  categoryCreate,
  categoryDelete,
  categoryUpdate,
} from '../action/category-actions.js';

describe('testing category-actions', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({title: 'YO'});
    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.title).toBe('YO');
  });

  test('categoryDelete returns a CATEGORY_DELETE action', () => {
    let mockCategory = {id: '12', timestamp: new Date(), title: 'cheeze'};
    let action = categoryDelete(mockCategory);
    expect(action.type).toEqual('CATEGORY_DELETE');
    expect(action.payload).toEqual(mockCategory);
  });

  test('categoryUpdate returns a CATEGORY_UPDATE action', () => {
    let mockCategory = {id: '12', timestamp: new Date(), title: 'cheeze'};
    let action = categoryUpdate(mockCategory);
    expect(action.type).toEqual('CATEGORY_UPDATE');
    expect(action.payload).toEqual(mockCategory);
  });
});
