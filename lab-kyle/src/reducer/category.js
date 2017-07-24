export default (state = [], action) => {
  let { type, payload } = action
  switch (type) {
  case 'CATEGORY_CREATE':
    return [...state, payload]
  case 'CATEGORY_UPDATE':
    return state.map(cat => (cat.id === payload.id ? payload : cat))
  case 'CATEGORY_DELETE':
    return state.filter(cat => cat.id !== payload.id)
  default:
    return state
  }
}
