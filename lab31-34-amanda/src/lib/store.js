// store
//
// in lib/store.js export a function that will return a new redux store from your category reducer

import {createStore} from 'redux'
import reducer from '../reducer/category-reducer.js'

export default () => createStore(reducer)
