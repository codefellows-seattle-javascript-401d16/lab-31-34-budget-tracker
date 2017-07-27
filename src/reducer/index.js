import {combineReducers} from 'redux'

import categoryReducer from './category-reducer.js'
import expenseReducer from './expense-reducer.js'

export default combineReducers({
  expenses: expenseReducer,
  categorys: categoryReducer,
})
