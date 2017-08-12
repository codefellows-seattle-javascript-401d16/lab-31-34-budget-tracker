//import the createstore and the applymiddleware object from react-redux
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducer/index.js';
//bring in the reporter
import reduxReporter from './redux-reporter.js';

//exporting a function that returns a new redux store from the category reducers
//pass middleware in as the second argument
export default () => createStore(reducers, applyMiddleware(reduxReporter));
