describe('testing category reducer', () => {
  test('should pass',() => {
    let result = categoryReducer(undefined, {type:null})
    expect(result).toEqual([])
  })

  test('CATEGORY_CREATE append to the array', () => {
    let actionOne = {
      type: 'CATEGORY_CREATE',
      payload: 'hello world',
    }
    let result = categoryReducer([], actionOne)
    expect(result.length).toBe(1)
    expect(result[0]).toBe(action.payload)
    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: 'hello world',
    }
    state = categoryReducer(state, actionTwo)
    expect(state.length).toBe(2)
    expect(state)
  })


  test('CATEGORY_DELETE should delete an item from the array', () => {
    let mockState = [
      {id: 'abc', title: 'cool'},
      {id: '234', title: 'cool'},
      {id: 'a567', title: 'cool'},
    ]

    let actionOne = {
      type: 'CATEGORY_DELETE',
      payload: {id: 'abc', title:'hax'},
    }

    let state = categoryReducer(mockState, actionOne)


    expect(state.length).toBe(3)
    expect(state).toEqual(mockState.filter(item => item.id != '123'))
    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: 'hello world',
    }
    state = categoryReducer(state, actionTwo)
    expect(state.length).toBe(2)
    expect(state)
  })
})
