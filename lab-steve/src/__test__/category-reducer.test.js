import categoryReducer from '../reducer/category.js';
import uuid from 'uuid/v1';

describe('Testing category reducer...', () => {
  test('The initial state should be an empty array.', () => {
    let result = categoryReducer(undefined, {type: null});
    expect(result).toEqual([]);
  });

  test('If the action type doesn\'t exist, the reducer will return the state.', () => {
    let newState =[
      {id: uuid(), title: 'awesome'},
    ];
    let result = categoryReducer(newState, {type: null});
    expect(result).toEqual(newState);
  });

  test('CATEGORY_CREATE should be appended to the array.', () => {
    let newAction = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: uuid(),
        title: 'awesome',
        timeStamp: new Date(),
      },
    };

    let state = categoryReducer([], newAction);
    expect(state.length).toEqual(1);
    expect(state[0]).toEqual(newAction.payload);
  });

  test('CATEGORY_DELETE should remove an item from the array.', () => {
    let newState = [
      {id: 1, title: 'mock', timestamp: new Date()},
      {id: 2, title: 'mock', timestamp: new Date()},
      {id: 3, title: 'mock', timestamp: new Date()},
    ];

    let newAction = {
      type: 'CATEGORY_DELETE',
      payload: newState[1],
    };

    let state = categoryReducer(newState, newAction);

    expect(state.length).toEqual(2);
    expect(state).toEqual(newState.filter(item =>
      item.id != 2
    ));
  });

  test('CATEGORY_UPDATE should update an item in the array.', () => {
    let newState = [
      {id: 1, title: 'mock', timestamp: new Date()},
      {id: 2, title: 'mock', timestamp: new Date()},
      {id: 3, title: 'mock', timestamp: new Date()},
    ];

    let newAction = {
      type: 'CATEGORY_UPDATE',
      payload: {id: 2, title: 'newTitle', timestamp: new Date()},
    };

    let state = categoryReducer(newState, newAction);

    expect(state.length).toEqual(3);
    expect(state).toEqual(newState.map(item =>
      item.id === 2 ? newAction.payload : item
    ));
  });
});
