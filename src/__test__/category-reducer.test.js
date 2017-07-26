import React from 'react'
import {shallow} from 'enzyme'
import categoryReducer from '../reducer/category.js'

describe('testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: null})
    expect(result).toEqual([])
  })

  test('if the action type isn\'t registered it will return the state', () => {
    let mockState = [
      {id: 'lion', name: 'matthew'},
      {id: 'tiger', name: 'lauren'},
    ]
    let result = categoryReducer(mockState, {type: null})
    expect(result).toEqual(mockState)
  })

  test('CATEGORY_CREATE should append to the array', () => {
    let actionOne = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: '456',
        name: 'monthly bills',
        budget: 100,
        timestamp: new Date(),
      },
    }

    let state = categoryReducer([], actionOne)
    expect(state.length).toBe(1)
    expect(state[0]).toBe(actionOne.payload)

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 'lion',
        name: 'all might',
        budget: 1000,
        timestamp: new Date(),
      },
    }

    state = categoryReducer(state, actionTwo)
    expect(state.length).toBe(2)
    expect(state[0]).toBe(actionOne.payload)
    expect(state[1]).toBe(actionTwo.payload)
  })

  test('CATEGORY_DELETE should delete a category from the array', () => {
    let mockState = [
      {id: '123', name: 'matthew', budget: 10, timestamp: new Date()},
      {id: '456', name: 'james', budget: 100, timestamp: new Date()},
      {id: '789', name: 'isaiah', budget: 1000, timestamp: new Date()},
      {id: 'abc', name: 'lauren', budget: 10000, timestamp: new Date()},
    ]

    let actionOne = {
      type: 'CATEGORY_DELETE',
      payload: mockState[2],
    }

    let state = categoryReducer(mockState, actionOne)

    expect(state.length).toBe(3)
    expect(state).toEqual(mockState.filter(item => item.id != '789'))
  })

  test('CATEGORY_UPDATE should update a category in the array', () => {
    let mockState = [
      {id: '123', name: 'matthew', budget: 10, timestamp: new Date()},
      {id: '456', name: 'james', budget: 100, timestamp: new Date()},
      {id: '789', name: 'isaiah', budget: 1000, timestamp: new Date()},
      {id: 'abc', name: 'lauren', budget: 10000, timestamp: new Date()},
    ]

    let actionOne = {
      type: 'CATEGORY_UPDATE',
      payload: {id: '456', name: 'james holbert', budget: 500},
    }

    let state = categoryReducer(mockState, actionOne)

    expect(state.length).toBe(4)
    expect(state).toEqual(mockState.map(item =>
      item.id === '456' ? actionOne.payload: item))
  })

  test ('CATEGORY_UPDATE should throw an error', () => {
    let mockState = [
      {id: '123', name: 'joseph', budget: 50, timestamp: new Date()},
    ]

    let actionOne = {
      type: 'CATEGORY_UPDATE',
      payload: {id: '123', budget: 500},
    }

    expect(() => categoryReducer(mockState, actionOne)).toThrow('VALIDATION ERROR: category must have id, name, and budget')
  })

})
