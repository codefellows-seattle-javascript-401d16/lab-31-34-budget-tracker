let reporter = state => next => action => {
  console.log('___ACTION___', action)
  try {
    let result = next(action)
    console.log('___STATE___', this.getState())
    return result
  } catch(error) {
    error.action = error
    console.log('___ERROR___', error)
    return error
  }
}

export default reporter
