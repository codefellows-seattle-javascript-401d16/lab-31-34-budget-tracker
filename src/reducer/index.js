import {combineReducers} from 'redux'

import expensesReducer from './expenses.js'
import categoriesReducer from './category.js'

export default combineReducers({
  expenses: expensesReducer,
  categories: categoriesReducer,
})
