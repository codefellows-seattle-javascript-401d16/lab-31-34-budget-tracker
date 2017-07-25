import uuid from 'uuid/v1';
import Moment from 'moment'
//action creators are helper functions to create actions

//you should only use actions creators throughtout your app
//you should never hard code actions literals in your app

export const categoryCreate = (category) => {
  category.id = uuid();
  category.timestamp = Moment();
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
})

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})
