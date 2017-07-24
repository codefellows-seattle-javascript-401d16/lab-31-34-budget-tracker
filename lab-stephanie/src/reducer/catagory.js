'use strict'

let initialState = {}

export default (state = initialState, action) => {
  let { type, payload } = action

  switch (type) {
  case 'CATAGORY_CREATE':
    return Object.assign({}, state)
  case 'CATAGORY_UPDATE':
    return Object.assign(
      {},
      state.map(catagory => (catagory.id == payload.id ? payload : catagory))
    )
  case 'CATAGORY_DELETE':
    return Object.assign(
      {},
      state.filter(catagory => catagory.id !== payload.id)
    )
  case 'CATAGORY_RESET':
    return initialState
  default:
    return state
  }
}
