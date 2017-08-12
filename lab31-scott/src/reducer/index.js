//import the combineReducers component from redux
import {combineReducers} from 'redux';

//import both reducer files to combine them
import categoryReducer from './category.js';
import expenseReducer from './expense.js';

//export the combined reducer object
export default combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer,
});
