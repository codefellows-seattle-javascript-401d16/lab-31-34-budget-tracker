import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import reporter from './reporter-redux.js';

export default () => createStore(reducer, applyMiddleware(reporter));
