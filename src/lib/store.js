import {createStore} from 'redux'
import combineReducer from '../reducer/index.js'

export default () => createStore(combineReducer)
