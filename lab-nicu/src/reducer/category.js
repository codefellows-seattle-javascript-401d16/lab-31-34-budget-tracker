'use strict'

const initialState = []

export default (state = initialState, action) => {
  let { type, payload } = action

  switch (type) {
  case 'CATEGORY_CREATE':
    return [...state, payload]

  case 'CATEGORY_UPDATE':
    console.log('updating',payload.id)
    return state.map(category => category.id === payload.id ? payload : category) 

  case 'CATEGORY_DESTROY':
    console.log('destroying', action)
    return state.filter(category => category.id !== payload.id)
  default:
    return initialState
  }
}
