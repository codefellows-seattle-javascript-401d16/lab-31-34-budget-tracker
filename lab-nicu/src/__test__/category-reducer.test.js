import categoryReducer from '../reducer/category.js'

describe('testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let res = categoryReducer(undefined, { type: null })
    expect(res.length).toEqual(0)
    expect(res).toEqual([])
  })

  test('should add a new category', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: {
        name: 'Woop',
        budget: 10,
      },
    }
    let res = categoryReducer([], action)

    expect(res.length).toEqual(1)
    expect(res[0].name).toEqual('Woop')
  })

  test('should update the name to 2nd element', () => {
    let state = [ 
      {name: 'Woop',budget: 10, id:'123', timestamp: new Date()},
      {name: 'Woop',budget: 10, id:'891', timestamp: new Date()},
      {name: 'Woop',budget: 10, id: '456', timestamp: new Date()},
    ]
    
    let action = {
      type: 'CATEGORY_UPDATE',
      payload: {
        id: '891',
        name: 'Rafiki',
        timestamp: new Date(),
        budget: 30,
      },
    }
    
    let res = categoryReducer(state, action)
    
    expect(res.length).toEqual(3)
    expect(res[1].name).toEqual(action.payload.name)
  })

  test('should DELETE 2nd element', () => {
    let state = [ 
      {name: 'Woop',budget: 10, id:'123', timestamp: new Date()},
      {name: 'Woop',budget: 10, id:'891', timestamp: new Date()},
      {name: 'Woop',budget: 10, id: '456', timestamp: new Date()},
    ]
    
    let action = {
      type: 'CATEGORY_DESTROY',
      payload: {
        id: '891',
        name: 'Rafiki',
        timestamp: new Date(),
        budget: 30,
      },
    }
    
    let res = categoryReducer(state, action)
    
    expect(res.length).toEqual(2)
  })
})