import {combineReducers} from 'redux';

import expensesReducer from './expense.js';
import categorysReducer from './category.js';

export default combineReducers({
  expense: expensesReducer,
  categorys: categorysReducer,
});
