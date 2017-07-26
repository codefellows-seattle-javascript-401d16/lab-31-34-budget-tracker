import {combineReducers} from 'redux';

import expensesReducer from './expenses.js';
import categorysReducer from './category.js';

export default combineReducers({
  expenses: expensesReducer,
  categorys: categorysReducer,
});
