import {combineReducers} from 'redux';

import expensesReducer from './expense.js';
import categoriesReducer from './category.js';

export default combineReducers({
  expenses: expensesReducer,
  categories: categoriesReducer,
});
