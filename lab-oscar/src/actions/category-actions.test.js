import {
  categoryCreate,
  categoryDelete,
  categoryUpdate,
}
from './category-actions.js';

describe('testing category actions', () => {
  test('testing to make sure we can see valid tests', () => {
    expect(true).toEqual(true)
  })

  test('testing categoryCreate action', () => {
    let action = categoryCreate({Name: 'testing', Budget: 100})
    expect(action.type).toEqual('CATEGORY_CREATE')
    expect(action.payload.id).toBeTruthy()
    expect(action.payload.timestamp).toBeTruthy()
    expect(action.payload.Name).toEqual('testing')
    expect(action.payload.Budget).toEqual(100)
  })

  test('tesing CATEGORY_DELETE', () => {
    let fakeCategory = {id: 1, timestamp: new Date(), Name: 'testign', Budget: 100}
    let action = categoryDelete(fakeCategory)
    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: fakeCategory,
    })
  })

  test('testing category update', () => {
    let fakeCategory = {id: 1, timestamp: new Date(), Name: 'testign', Budget: 100}
    let action = categoryUpdate(fakeCategory)
    expect(action).toEqual({
      type: 'CATEGORY_UPDATE',
      payload: fakeCategory,
    })
  })
})
