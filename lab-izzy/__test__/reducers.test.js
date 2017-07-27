import reducer from '../reducer/category';
import * as types from '../action/category-actions.js';

describe('categories reducer', () => {
  test('should return the initial state', () => {
    let result = reducer(undefined, {type: null});
    expect(result).toEqual([]);
  });

  test('if the action isnt registered it will return the state', () => {
    let result = reducer(0, {type: null});
    expect(result).toEqual(0);
  });

  test('should handle CATEGORY_CREATE', () => {
    let actionOne = {
      type: 'CATEGORY_CREATE',
      payload: 'hello world',
    };

    let state = reducer([], actionOne);
    expect(state.length).toBe(1);
    expect(state[0]).toBe(actionOne.payload);

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: 'bye',
    };
    state = reducer(state, actionTwo);
    expect(state.length).toBe(2);
    expect(state[0]).toBe(actionOne.payload);
    expect(state[1]).toBe(actionTwo.payload);
  });

  test('CATEGORY_DELETE should delete a category from the array', () => {
    let mockState = [
      {id: 'izzy', title: 'is awesome'},
      {id: 'coding', title: 'is the best'},
      {id: 'react', title: 'is super hard'},
    ];

    let actionOne = {
      type: 'CATEGORY_DELETE',
      payload: mockState[1],
    };

    let state = reducer(mockState, actionOne);

    expect(state.length).toBe(2);
    expect(state).toEqual(mockState.filter(item => item.id !== 'coding'));
  });
  
  test('CATEGORY_UPDATE should update a category in the array', () => {
    let mockState = [
      {id: 'izzy', title: 'is awesome'},
      {id: 'coding', title: 'is the best'},
      {id: 'react', title: 'is super hard'},
    ];

    let actionOne = {
      type: 'CATEGORY_UPDATE',
      payload: {id: 'react', title: 'is the shit'},
    };

    let state = reducer(mockState, actionOne);

    expect(state.length).toBe(3);
    expect(state).toEqual(mockState.map(item => item.id == 'react' ? actionOne.payload : item));
  });
});
