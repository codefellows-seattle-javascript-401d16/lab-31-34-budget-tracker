import categoryReducer from '../reducer/category.js';

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
});
