let validateCategory = category => {
  if (!category.name || !category.budget || !category.id || !category.timestamp)
    throw new Error('Category must have a name, budget, id, and timestamp.')
}

export default (state = [], action) => {
  let { type, payload } = action

  switch (type) {
  case 'CATEGORY_CREATE':
    validateCategory(payload)
    return [...state, payload]

  case 'CATEGORY_UPDATE':
    validateCategory(payload)
    return state.map(cat => {
      return cat.id === payload.id ? payload : cat
    })

  case 'CATEGORY_DELETE':
    validateCategory(payload)
    return state.filter(cat => cat.id !== payload.id)

  default:
    return state
  }
}
