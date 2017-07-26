'use strict'

import { createStore } from 'redux'
import reducer from '../reducer/index.js'

export default () => createStore(reducer)
