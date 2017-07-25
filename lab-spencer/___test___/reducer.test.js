import jest from 'jest';
import reducer from '../src/reducer/budgetCategory.js';

describe('Testing reducer', () => {
  test('It should return an array', () => {
    let action = {
      type: 'BUDGET_CATEGORY_CREATE',
      payload: {
        title: 'yo',
        budget: 4,
      },
    };
    let reduced = reducer([], action);
    expect(reduced[0].title).toEqual('yo');
    expect(reduced[0].budget).toEqual(4);
  });
});
