import {createStore, applyMiddleware} from 'redux'
import combineReducer from '../reducer/index.js'
import reporter from './redux-reporter.js'

export default () => createStore(combineReducer, applyMiddleware(reporter))
