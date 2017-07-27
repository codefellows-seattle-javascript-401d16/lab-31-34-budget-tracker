import {createStore} from 'redux';
import reducer from '../reducer/budget';

export default () => createStore(reducer);
