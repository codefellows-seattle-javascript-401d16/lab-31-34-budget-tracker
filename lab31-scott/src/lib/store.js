//import the createstore object from react-redux
import {createStore} from 'redux';
import reducers from '../reducer/index.js';

//exporting a function that returns a new redux store from the category reducers
export default () => createStore(reducers);
