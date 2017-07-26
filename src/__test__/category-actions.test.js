import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../action/category-actions.js'

describe('testing category actions', () => {
  test('categoryCreate should retun a CATEGORY_CREATE action', () => {
    let action = categoryCreate({name: 'animals', budget: 50})
    expect(action.type).toEqual('CATEGORY_CREATE')
    expect(action.payload.id).toBeTruthy()
    expect(action.payload.timestamp).toBeTruthy()
    expect(action.payload.name).toBe('animals')
    expect(action.payload.budget).toBe(50)
  })

  test('categoryDelete should return a CATEGORY_DELETE action', () => {
    let mockCategory = {id: '456', name: 'bills', budget: 1000, timestamp: new Date()}
    let action = categoryDelete(mockCategory)
    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: mockCategory,
    })
  })

  test('categoryUpdate should return a CATEGORY_DELETE action', () => {
    let mockCategory = {id: '123', name: 'rent', budget: 650, timestamp: new Date()}
    let action = categoryUpdate(mockCategory)
    expect(action).toEqual({
      type: 'CATEGORY_UPDATE',
      payload: mockCategory,
    })
  })
})
