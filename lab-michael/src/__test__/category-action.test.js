import {
  categoryCreate,
  categoryDelete,
  categoryUpdate,
} from '../action/category-action.js'


describe('testing category actions', ()=> {
  test('categoryCreate returns a category create action', ()=> {
    let action = categoryCreate({title: 'cool'})
    expect(action.type).toEqual('CATEGORY_CREATE')
    expect(action.payload.id).toBeTruthy()
    expect(action.payload.title).toBe('cool')
  })
  test('category delete returns a category delete action', () => {
    let category = {id:'124', timestamp: newDate(), title: 'cool'}
    let action = categoryDelete(mockCategory)
    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: mockCategory,
    })
  })

  // test('categoryupdate returns a CATEGORY_UPDATE action', ()=> {
  //
  // })
})
