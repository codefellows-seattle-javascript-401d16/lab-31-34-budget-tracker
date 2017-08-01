import uuid from 'uuid/v1'

export const categoryCreate = (category) => {
  category.id = uuid()
  category.timeStamp = new Date()
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
})

export const categoryReset = (category) => ({type: 'CATEGORY_RESET'})
