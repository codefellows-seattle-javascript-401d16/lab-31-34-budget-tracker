'use strict'

let validatePayload = (payload) => {
  if(!payload.id || !payload.timestamp || !payload.Name || !payload.Budget)
    throw new Error('VALIDATION ERROR: category must have a valid id, timestamp, name and budget')
}
let intialState = []

export default (state=intialState, action) => {
  let {type, payload} = action
  switch(type){
    case 'CATEGORY_CREATE':
      validatePayload(payload)
      return [...state, payload]
      break;
    case 'CATEGORY_DELETE':
      validatePayload(payload)
      return state.filter(category => category.id !== payload.id)
      break;
    case 'CATEGORY_UPDATE':
      validatePayload(payload)
      return state.map(category =>
      category.id === payload.id ? payload : category)
      break;
    case 'LOAD_LOCALSTORE':
    return [...state, payload]

    default:
      return state
  }
}
