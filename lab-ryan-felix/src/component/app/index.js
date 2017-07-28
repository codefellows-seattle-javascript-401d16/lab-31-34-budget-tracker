import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import reducer from '../../reducer';
import reduxReporterMiddleware from '../../lib/redux-reporter-middleware.js';
import Dashboard from '../dashboard';


const store = createStore(reducer, applyMiddleware(reduxReporterMiddleware));

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
