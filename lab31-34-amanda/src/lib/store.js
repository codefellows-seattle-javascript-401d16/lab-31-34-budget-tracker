// store
//
// in lib/store.js export a function that will return a new redux store from your category reducer ALSO  in order to test compnanatn that need a store to be tetsed.

import {createStore} from 'redux';
import reducer from '../reducer/category-reducer.js';

export default () => createStore(reducer);
