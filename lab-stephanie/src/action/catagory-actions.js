'use strict'

import uuid from 'uuid/v1'

export const catagoryCreate = catagory => {
  catagory.id = uuid()
  catagory.timestamp = new Date()
  catagory.name = ''
  catagory.budget = 0
  return {
    type: 'CATAGORY_CREATE',
    payload: catagory,
  }
}
export const catagoryUpdate = catagory => ({
  type: 'CATAGORY_UPDATE',
  payload: catagory,
})

export const catagoryDelete = catagory => ({
  type: 'CATAGORY_DELETE',
  payload: catagory,
})

export const catagoryReset = () => ({
  type: 'CATAGORY_RESET',
})
