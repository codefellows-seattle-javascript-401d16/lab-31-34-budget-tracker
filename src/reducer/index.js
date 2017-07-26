import {combineReducers} from 'redux'

import expensesReducer from './expense'
import budgetsReducer from './budget'

export default combineReducers({
  expenses: expensesReducer,
  budgets: budgetsReducer,
})
