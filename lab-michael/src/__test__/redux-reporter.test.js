import {createStore, applyMiddleware} from 'redux'
import reporter from '../lib/redux-reporter.js'

let mockStore = () => {
  let reducer = (state =0, action) {
    switch(action.type){
      case 'ERROR':
      throw new Error('test error)
      default:return state')
    }
    }
    return createStore(reducer, applyMiddleware(reporter))
  }
   describe('redux- repoerter', () => {
     test('dispatch should return the action', () => {
       let mockStore = mockSToreCreate()
       let action = {type: 'TEST_ACTION', payload: [1,2,3]}
       let result = mockStore.dispatch(action)
       expect(mockStore.getState()).toEqual(0)
       action = {type: 'INC'}
       result = mockStore.dispatch(action)
       expect(result).toEqual()
     })

  //    test('')
  //  }))
}
