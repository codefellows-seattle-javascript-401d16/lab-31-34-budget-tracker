//import the combineReducers component from redux
import {combineReducers} from 'redux';

//import both reducer files to combine them
import catergoryReducer from './category.js';
import expenseReducer from './expense.js';

//export the combined reducer object
export default combineReducers({
  categories: catergoryReducer,
  expenses: expenseReducer,
});
