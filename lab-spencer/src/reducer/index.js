import {combineReducers} from 'redux';

import expenseReducer from './expense.js';
import budgetCategoryReducer from './budgetCategory.js';

export default combineReducers({
  budgetCategories: budgetCategoryReducer,
  expenses: expenseReducer,
});
