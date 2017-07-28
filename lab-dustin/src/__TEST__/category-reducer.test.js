import categoryReducer from '../reducer/category.js';

describe('Testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: null});
    expect(result).toEqual([]);
  });

  test('the action isnt registered it will return the state', () =>{
    let mockState = [
      {id: '1234', title: 'peaches'},
      {id: '4321', title: 'and cream'},
    ];
    let result = categoryReducer(mockState, {type: null});
    expect(result).toEqual(mockState);
  });

  test('CATEGORY_CREATE should append to the array', () => {
    let action1 = {
      type: 'CATEGORY_CREATE',
      payload: {
        id:'1234',
        title:'nano',
        timestamp: new Date(),
      },
    };

    let state=categoryReducer([], action1);
    expect(state.length).toBe(1);
    expect(state[0]).toBe(action1.payload);

    let action2 = {
      type: 'CATEGORY_CREATE',
      payload: {
        id:'eggs',
        title:'delish',
        timestamp: new Date(),
      },
    };
    state=categoryReducer(state, action2);
    expect(state[1]).toBe(action2.payload);
    expect(state.length).toBe(2);
  });


});
