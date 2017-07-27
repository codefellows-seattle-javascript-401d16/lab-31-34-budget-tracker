import categoryReducer from '../reducer/category.js';

describe('testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: null});
    expect(result).toEqual([]);
  });
});
