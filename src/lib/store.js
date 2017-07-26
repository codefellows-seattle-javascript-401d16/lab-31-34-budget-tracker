import {createStore} from 'redux'
import reducer from '../reducer/'
import reporter from './redux-reporter.js'

export default () => createStore(reducer)
