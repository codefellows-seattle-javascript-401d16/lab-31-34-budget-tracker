import {combineReducers} from 'redux';

import categorysReducer from './category.js';
import expensesReducers from './expenses.js';

export default combineReducers({
  categorys: categorysReducer,
  expenses: expensesReducers,
})
