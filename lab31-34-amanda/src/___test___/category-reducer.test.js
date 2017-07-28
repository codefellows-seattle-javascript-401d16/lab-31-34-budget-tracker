import categoryReducer from '../reducer/category-reducer.js';

describe('testing category reducer', () => {
  test('initial state shoudl be an empty array', () => {
    let result = categoryReducer(undefined, {type:null});
    expect(result).toEqual([]);
  });

  test('if the action type isn\'t registered it will retun the state', () => {
    let mockState = [
      {id: 'abc', title: 'cool'},
      {id: '123', title: 'cool'},
    ];

    let result = categoryReducer(mockState, {type: null});
    expect(result).toEqual(mockState);
  });

  test('CATEGORY_CREATE should append to the array', () => {
    let actionOne = {
      type: 'CATEGORY_CREATE',
      payoad: {
        id: '123',
        title: 'testing CATEGORY_CREATE',
        timestamp: new Date(),
      },
    };

    let state = categoryReducer([], actionOne);
    expect(state.length).toBe(1);
    expect(state[0]).toBe(actionOne.payload);

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 'create',
        title: 'testcreate',
        timestamp: new Date(),
      },
    };

    state = categoryReducer(state, actionTwo);
    expect(state.length).toBe(2);
    expect(state[0]).toBe(actionOne.payload);
    expect(state[1]).toBe(actionTwo.payload);
  });

  test('CATEGORY_DELETE should delete a category from the array', () => {
    let mockState = [
      {id: '123', title: 'delete', timestamp: new Date()},
      {id: '456', title: 'delete', timestamp: new Date()},
      {id: '789', title: 'delete', timestamp: new Date()},
      {id: '234', title: 'delete', timestamp: new Date()},
    ];

    let actionOne={
      type: 'CATEGORY_DELETE',
      payload: 'mockState[1]',
    };

    let state = categoryReducer(mockState, actionOne);

    expect(state.length).toBe(3);
    expect(state).toEqual(mockState.filter(item => item.id != 'aaa'));

  });
});
