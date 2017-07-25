import jest from 'jest';
import reducer from '../src/reducer/budgetCategory.js';

describe('Testing reducer', () => {
  test('Initial state should be []', () => {
    let reduced = reducer(undefined, {title: null, budget: 0});
    expect(reduced).toEqual([]);
  });
  test('BUDGET_CATEGORY_CREATE: it should return an array with the new item appended', () => {
    let action = {
      type: 'BUDGET_CATEGORY_CREATE',
      payload: {
        title: 'yo',
        budget: 4,
      },
    };
    let reduced = reducer([], action);
    expect(reduced.length).toBe(1);
    expect(reduced[0].title).toEqual(action.payload.title);
    expect(reduced[0].budget).toEqual(action.payload.budget);
    let action2 = {
      type: 'BUDGET_CATEGORY_CREATE',
      payload: {
        title: 'asdasda',
        budget: 5,
      },
    };
    let state = reducer(reduced, action2);
    expect(state.length).toBe(2);
    expect(state[1].title).toEqual(action2.payload.title);
    expect(state[1].budget).toEqual(action2.payload.budget);
  });

  test('BUDGET_CATEGORY_DELETE should delete from the array', () => {
    let mockState = [
      {
        id: 'asd',
        title: 'yo',
        budget: 5,
      },
      {
        id: 'ewq',
        title: 'yoooo',
        budget: 50,
      },
      {
        id: '1341',
        title: 'hi',
        budget: 2,
      },
    ];
    let action = {
      type: 'BUDGET_CATEGORY_DELETE',
      payload: mockState[1],
    };

    let reduced = reducer(mockState, action);
    expect(reduced.length).toBe(2);
    expect(reduced).toEqual(mockState.filter(item => item.id != 'ewq'));
  });

  test('BUDGET_CATEGORY_UPDATE should update a category in the array', () => {
    let mockState = [
      {
        id: 'asd',
        title: 'yo',
        budget: 5,
      },
      {
        id: 'ewq',
        title: 'yoooo',
        budget: 50,
      },
      {
        id: '1341',
        title: 'hi',
        budget: 2,
      },
    ];

    let action = {
      type: 'BUDGET_CATEGORY_UPDATE',
      payload: {
        id: 'ewq',
        title: 'yoooo',
        budget: 12,
      },
    };

    let reduced = reducer(mockState, action);

    expect(reduced.length).toBe(3);
    expect(reduced[1].id).toEqual('ewq');
    expect(reduced[1].title).toEqual('yoooo');
    expect(reduced[1].budget).toEqual(12);
  });
});
