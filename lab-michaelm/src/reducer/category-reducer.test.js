import categoryReducer from './category.js';

describe('testing category reducer', () => {
  test('inital state should be an empty array', () =>{
    let result = categoryReducer(undefined, {type: null});
    expect(result).toEqual([]);
  });

  test('if the action type isnt registerd it will return the state', () =>{
    let mockState = [
      { id: 'abc',  name: 'cool', budget: 0},
      { id: '123',  name: 'cool', budget: 200},
    ];

    let result = categoryReducer(mockState, {type: null});
    expect(result).toEqual(mockState);
  });

  test('CATEGORY_CREATE should append to the array', () => {
    let actionOne = {
      type: 'CATEGORY_CREATE',
    };

    let state = categoryReducer([], actionOne.type);
    expect(state.length).toBe(0);
    expect(state).toEqual([]);

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: {
        id:'123',
        name: 'cool lulwat',
        timestamp: new Date(),
        budget: 200,
      },
    };

    state = categoryReducer(state, actionTwo);
    expect(state.length).toBe(1);
    expect(state[0]).toBe(actionTwo.payload);
  });

  test('CATEGORY_DELETE should delete a category from the array', () => {
    let mockState = [
      { id: 'abc',  name: 'cool', budget: 12, timestamp: new Date()},
      { id: '123',  name: 'cool', budget: 13, timestamp: new Date()},
      { id: 'zyx',  name: 'cool', budget: 14, timestamp: new Date()},
      { id: '000',  name: 'cool', budget: 15, timestamp: new Date()},
    ];

    let actionOne= {
      type: 'CATEGORY_DELETE',
      payload: mockState[1],
    };

    let state = categoryReducer(mockState, actionOne);

    expect(state.length).toBe(3);
    expect(state).toEqual(mockState.filter(item => item.id != '123'));
  });

  test('CATEGORY_UPDATE should update a category in the array', () => {
    let mockState = [
      { id: 'abc',  name: 'cool', budget: 12, timestamp: new Date()},
      { id: '123',  name: 'cool', budget: 13, timestamp: new Date()},
      { id: 'zyx',  name: 'cool', budget: 14, timestamp: new Date()},
      { id: '000',  name: 'cool', budget: 15, timestamp: new Date()},
    ];

    let actionOne= {
      type: 'CATEGORY_UPDATE',
      payload: {id: 'zyx', name: 'hax', budget: 20, timestamp: new Date()},
    };

    let state = categoryReducer(mockState, actionOne);

    expect(state.length).toBe(4);
    expect(state).toEqual(mockState.map(item =>
      item.id == 'zyx' ? actionOne.payload : item));
  });

  test('CATEGORY_UPDATE should throw and error', () => {
    let mockState = [
      { id: 'abc',  name: 'cool', timestamp: new Date()},
    ];

    let actionOne= {
      type: 'CATEGORY_UPDATE',
      payload: {id: 'zyx', timestamp: new Date()},
    };

    expect(() => categoryReducer(mockState, actionOne))
    .toThrow('VALIDATION ERROR: category must have id, name, timestamp, and budget');

  });


});
