import expenseReducer from './expense.js';

describe('testing expense reducer', () => {
  test('inital state should be an empty object', () =>{
    let result = expenseReducer(undefined, {type: null});
    expect(result).toEqual({});
  });

  test('if the action type isnt registerd it will return the state', () =>{
    let mockState = [
      { id: 'abc',  name: 'cool', timestamp: new Date(), price: 0},
      { id: '123',  name: 'cool', timestamp: new Date(), price: 200},
    ];

    let result = expenseReducer(mockState, {type: null});
    expect(result).toEqual(mockState);
  });

  test('CATEGORY_CREATE should append to the object', () => {
    let actionOne = {
      type: 'CATEGORY_CREATE',
    };

    let state = expenseReducer({}, actionOne.type);
    expect(state).toEqual({});

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: {
        id:'123',
        name: 'cool lulwat',
        timestamp: new Date(),
        budget: 200,
      },
    };

    state = expenseReducer(state, actionTwo);
    expect(state).toEqual({'123': []});
  });

  test('EXPENSE_CREATE should append to the object', () => {
    let mockState = expenseReducer({},{
        type: 'CATEGORY_CREATE',
        payload: {
          id: 'abc',
          name: 'horse',
          budget: 20,
          timestamp: new Date(),
        },
      }
    );

    mockState = expenseReducer(mockState,{
        type: 'EXPENSE_CREATE',
        payload: {
          id: 1,
          name: 'horse',
          categoryID: 'abc',
          price: 20,
        },
      }
    );

    let actionOne = {
        type: 'EXPENSE_CREATE',
        payload: {
          id: 2,
          name: 'cat',
          categoryID: 'abc',
          price: 21,
        },
      };

    let state = expenseReducer(mockState, actionOne);

    expect(state.abc[1]).toEqual(actionOne.payload);
  });

  test('EXPENSE_UPDATE should update a category in the array', () => {
    let mockState = expenseReducer({},{
        type: 'CATEGORY_CREATE',
        payload: {
          id: 'abc',
          name: 'horse',
          budget: 20,
          timestamp: new Date(),
        },
      }
    );

    let mockState2 = expenseReducer(mockState,{
        type: 'EXPENSE_CREATE',
        payload: {
          id: 1,
          name: 'horse',
          categoryID: 'abc',
          price: 20,
        },
      }
    );
    mockState2 = expenseReducer(mockState2,{
        type: 'EXPENSE_CREATE',
        payload: {
          id: 2,
          name: 'cat',
          categoryID: 'abc',
          price: 21,
        },
      }
    );
    mockState2 = expenseReducer(mockState2,{
        type: 'EXPENSE_CREATE',
        payload: {
          id: 3,
          name: 'dog',
          categoryID: 'abc',
          price: 22,
        },
      }
    );
    mockState2 = expenseReducer(mockState2,{
        type: 'EXPENSE_CREATE',
        payload: {
          id: 4,
          name: 'mouse',
          categoryID: 'abc',
          price: 23,
        },
      }
    );

    let actionOne= {
      type: 'EXPENSE_UPDATE',
      payload: {id: 2,  name: 'updated', price: 125, categoryID: 'abc'},
    };

    let state = expenseReducer(mockState2, actionOne);
    expect(state.abc.map(item => {return item;})).toEqual(mockState2.abc.map(item =>
      item.id == actionOne.payload.id ? actionOne.payload : item)
    );
  });

  test('EXPENSE_CREATE should throw and error', () => {
    let mockState = [
      { id: 'abc',  name: 'cool', timestamp: new Date()},
    ];

    let actionOne= {
      type: 'EXPENSE_UPDATE',
      payload: {id: 'zyx', timestamp: new Date()},
    };

    expect(() => expenseReducer(mockState, actionOne))
    .toThrow('VALIDATION ERROR: expense must have id, name, categoryID, and price');

  });


});
