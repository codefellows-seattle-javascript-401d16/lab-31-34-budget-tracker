import expenseReducer from './expenses.js';

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
    let state = {};
    expect(state).toEqual({});

    let actionOne = {
      type: 'EXPENSE_CREATE',
      payload: {
        id:'12345',
        name: 'expense 1',
        categoryID: '654',
        price: 200,
      },
    };

    state = expenseReducer(state, actionOne);
    console.log(state);
    expect(state).toEqual(actionOne.payload);
  });

  test.only('EXPENSE_UPDATE should update a category in the array', () => {
    let mockState = expenseReducer({},{
      type: 'EXPENSE_CREATE',
      payload: {
        id:'1',
        name: 'horse',
        categoryID: '12',
        price: 20,
      },
    }
    );
    console.log('update mockstate1:\n',mockState);
    mockState = expenseReducer(mockState,{
      type: 'EXPENSE_CREATE',
      payload: {
        id:'2',
        name: 'cat',
        categoryID: '13',
        price: 21,
      },
    }
    );
    console.log('update mockstate2:\n',mockState);
    mockState = expenseReducer(mockState,{
      type: 'EXPENSE_CREATE',
      payload: {
        id:'3',
        name: 'dog',
        categoryID: '14',
        price: 22,
      },
    }
    );
    console.log('update mockstate3:\n',mockState);
    mockState = expenseReducer(mockState,{
      type: 'EXPENSE_CREATE',
      payload: {
        id:'4',
        name: 'mouse',
        categoryID: '15',
        price: 23,
      },
    }
    );
    console.log('update mockstate4:\n',mockState);


    let actionOne= {
      type: 'EXPENSE_UPDATE',
      payload: {id: '123',  name: 'updated', price: 125, categoryID: 120},
    };

    let state = expenseReducer(mockState, actionOne);
    console.log('update state:\n',state);
    expect(state).toEqual();
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