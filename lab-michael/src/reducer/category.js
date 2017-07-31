'use strict'
let intialState = []

// function payloadValidator(payload){
//   if(!payload.id || !payload.title || !payload.timestamp)
//   throw new Error('yeah this is an error, must have id, title and timestamp')
// }
//this needs to be in each case!!!^^^^


export default (state = intialState, action) => {
  let {type, payload} = action
  switch(type){
    case 'CATEGORY_CREATE':
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      return state.map(category =>
        category.id == payload.id ? payload : category)
    case 'CATEGORY_DELETE':
      return state.filter(category => category.id !== payload.id)
    default:
      return state
  }
}
