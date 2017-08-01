let reporter = store => next => action => {
  console.log('__ACTION__', action)

  try {
    let result = next(action) 
    console.log('__STATE__', store.getState())

  } catch (error){
    error.action = console.error('__ERROR__', error)
    return error
  }
}
