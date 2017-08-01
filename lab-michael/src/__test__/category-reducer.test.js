import categoryReducer from '../reducer/category.js'

describe('testing category reducer', () => {
  test('should pass',() => {
    let result = categoryReducer(undefined, {type:null})
    expect(result).toEqual([])
  })

  test('CATEGORY_CREATE append to the array', () => {
    let actionOne = {
      type: 'CATEGORY_CREATE',
      payload: {id:123, title:'hello world', timestamp:new Date()},
    }
    let result = categoryReducer([], actionOne)
    expect(result.length).toBe(1)
    expect(result[0]).toBe(actionOne.payload)
    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: {id:456, title:'sup dude', timestamp:new Date()},
    }
    let state = categoryReducer(result, actionTwo)
    expect(state.length).toBe(2)
  })


  test('CATEGORY_DELETE should delete a category from the array', () => {
    let mockState = [
      {id: 'abc', title: 'cool',timestamp: new Date()},
      {id: '234', title: 'cool',timestamp: new Date()},
      {id: 'a567', title: 'cool',timestamp: new Date()},
    ]

    let actionOne = {
      type: 'CATEGORY_DELETE',
      payload: mockState[2],
    }

    let firstState = categoryReducer(mockState, actionOne)

    // console.log('this is the firstState!!!!!!',mockState.length, firstState.length)
    expect(firstState.length).toBe(2)
    expect(firstState).toEqual(mockState.filter(item => item.id != 'a567'))
    let actionTwo = {
      type: 'CATEGORY_DELETE',
      payload: mockState[1],
    }
    let secondState = categoryReducer(firstState, actionTwo)
    expect(secondState.length).toBe(1)
  })
})
