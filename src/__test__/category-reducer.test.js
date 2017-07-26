import React from 'react'
import {shallow} from 'enzyme'
import categoryReducer from '../reducer/category.js'

describe('testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: null})
    expect(result).toEqual([])
  })

  test('CATEGORY_CREATE should append to the array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: 'hello world',
    }
    let state = categoryReducer([], action)
    expect(state.length).toBe(1)
    expect(state[0]).toBe(action.payload)
  })

  test('CATEGORY_DELETE should delete a category from the array', () => {
    let mockState = [
      {id: 'lion', name: 'matt'},
      {id: 'fox', name: 'lauren'},
      {id: 'falcon', name: 'james'},
    ]
    let actionOne = {
      type: 'CATEGORY_DELETE',
      payload: mockState[2],
    }
    let state = categoryReducer(mockState, actionOne)

    expect(state.length).toBe(2)
    expect(state).toEqual(mockState.filter(item => item.id != 'falcon'))
  })

  test('CATEGORY_UPDATE should update a category from the array', () => {
    let mockState = [
      {id: 'lion', name: 'matt'},
      {id: 'fox', name: 'lauren'},
      {id: 'falcon', name: 'james'},
    ]
    let actionOne = {
      type: 'CATEGORY_UPDATE',
      payload: {id: 'fox', name: 'lauren paschke'},
    }
    let state = categoryReducer(mockState, actionOne)

    expect(state.length).toBe(3)
    expect(state).toEqual(mockState.map(item => item.id === 'fox'))
  })
})
