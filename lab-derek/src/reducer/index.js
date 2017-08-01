import {combineReducers} from 'redux';

import categoriesReducer from './budget-category.js';
import expensesReducer from './expense.js';

export default combineReducers({
  categories: categoriesReducer,
  expenses: expensesReducer,
});
