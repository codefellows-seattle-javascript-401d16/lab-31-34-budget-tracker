let validatePayload = (payload) => {
  if(!payload.id || !payload.title || !payload.timestamp)
    throw new Error('Validation Failed: payload must have id, title, and timestamp')
}

let originalState = []

export default (state=originalState, action) => {
  let {type, payload} = action
  switch(type){
  case 'CATEGORY_CREATE':
    return [...state, payload]
  case 'CATEGORY_UPDATE':
    return state.map(category =>{
      console.log('cat', payload)
      return category.id == payload.id ? payload : category})

  case 'CATEGORY_DELETE':
    return state.filter(category =>
      category.id !== payload.id)
  case 'CATEGORY_RESET':
    return originalState
  default:
    return state
  }
}
