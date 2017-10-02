import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../action/category-action.js';

describe('testing category action', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({title: 'cool'});
    expect(action.type).toEqual('CATEGORY_CREATE', () => {
      expect(action.payload.id).toBeTruthy();
      expect(action.payload.timestamp).toBeTruthy();
      expect(action.payload.title).toBe('payload title');
    });

    test('categoryDelete returns a CATEGORY_DELETE action', () => {
      let mockCategory = {id :'123', timestamp: new Date(), title: 'delete'};
      let action = categoryDelete(mockCategory);
      expect(action).toEqual({
        type: 'CATEGORY_DELETE',
        payload: mockCategory,
      });
    });

    // test('categoryUpdate returns a CATEGORY_UPDATE action', () => {
    //   let mockCategory = {id: '1234', timestamp: new Date() , title: 'mock'};
    //   let action = categoryUpdate(mockCategory);
    //   expect(action).toEqual({
    //     type: 'CATEGORY_UPDATE',
    //     payload: mockCategory,
    //   });
    // });

  });
});
