import {createStore} from 'redux';
import reducer from '../reducer/budget-category.js';

export default () => createStore(reducer);
