import categoryReducer from './category.js';

let fakeState, result;
describe('testing category reducer', () => {
  test('testing jest',() => {
    expect(true).toEqual(true);
  })

  test('it should return an empty Array', () => {
    result = categoryReducer(undefined, {type: 'whatever'})
    expect(result).toEqual([])
  })

  test('if actions if not registered it should return the original state', () => {
    fakeState = [
      {id: 1, timestamp: new Date(), Name: 'test', Budget: '100' }
    ]
    result = categoryReducer(fakeState, {type: 'testing'});
    expect(result).toEqual(fakeState);
  })

  test('CATEGORY_CREATE should append to the state array', () =>  {
    let actionOne = {
      type: 'CATEGORY_CREATE',
      payload: {id: 12345, timestamp: new Date(), Name: 'testing', Budget: '100'}
    }

    let fakeState = categoryReducer([], actionOne)
    expect(fakeState.length).toEqual(1)
    expect(fakeState[0]).toEqual(actionOne.payload)

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: {id: 8392758437, timestamp: new Date(), Name: 'testing-two', Budget: '150'}
    }
    fakeState = categoryReducer(fakeState, actionTwo)
    expect(fakeState.length).toEqual(2)
    expect(fakeState[1]).toEqual(actionTwo.payload)
    expect(fakeState[0]).toEqual(actionOne.payload)
  })

  test('CATEGORY_DELETE should remove a category from the array', () => {

    let mockFakeState = [
      {id: 1, timestamp: new Date(), Name: 'test0', Budget: '100' },
      {id: 2, timestamp: new Date(), Name: 'test1', Budget: '200' },
      {id: 3, timestamp: new Date(), Name: 'test2', Budget: '300' },
      {id: 4, timestamp: new Date(), Name: 'test3', Budget: '400' },
    ]

    let actionOne = {
      type: 'CATEGORY_DELETE',
      payload: mockFakeState[1],
    }
    fakeState = categoryReducer(mockFakeState, actionOne)
    expect(fakeState.length).toEqual(3)
    expect(fakeState).toEqual(mockFakeState.filter(item => item.id != 2))
  })

  test('CATEGORY_UPDATE should update a category in the array', () => {
    let mockFakeState = [
      {id: 1, timestamp: new Date(), Name: 'test0', Budget: '100' },
      {id: 2, timestamp: new Date(), Name: 'test1', Budget: '200' },
      {id: 3, timestamp: new Date(), Name: 'test2', Budget: '300' },
      {id: 4, timestamp: new Date(), Name: 'test3', Budget: '400' },
    ]
    let actionOne = {
      type: 'CATEGORY_UPDATE',
      payload: {id: 1, timestamp: new Date(), Name: 'testing-update', Budget: '1000' }
    }

    fakeState = categoryReducer(mockFakeState, actionOne)
    expect(fakeState[0]).toEqual(actionOne.payload)
    expect(fakeState.length).toEqual(4)
    expect(fakeState).toEqual(mockFakeState.map(item => item.id == 1 ? actionOne.payload : item))
  })
})
