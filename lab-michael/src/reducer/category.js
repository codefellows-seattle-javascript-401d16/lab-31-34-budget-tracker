'use strict'

function payloadValidator(payload){
  if(!payload.id || !payload.title || !payload.timestamp){
    throw new Error('yeah this is an error, must have id, title and timestamp')
    // console.log('this is the payload>>>',payload);
  }
}



let intialState = []
export default (state = intialState, action) => {
  let {type, payload} = action
  switch(type){
    case 'CATEGORY_CREATE':
      payloadValidator(payload)
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      payloadValidator(payload)
      return state.map(category =>
        category.id == payload.id ? payload : category)
    case 'CATEGORY_DELETE':
      payloadValidator(payload)
      return state.filter(category => category.id !== payload.id)
    default:
      return state
  }
}
