'use strict'

import uuid from 'uuid/v1'

export const categoryCreate = catagory => {
  catagory.id = uuid()
  catagory.timestamp = new Date()
  return {
    type: 'CATEGORY_CREATE',
    payload: catagory,
  }
}
export const categoryUpdate = catagory => ({
  type: 'CATEGORY_UPDATE',
  payload: catagory,
})

export const categoryDelete = catagory => ({
  type: 'CATEGORY_DELETE',
  payload: catagory,
})

export const categoryReset = () => ({
  type: 'CATEGORY_RESET',
})
