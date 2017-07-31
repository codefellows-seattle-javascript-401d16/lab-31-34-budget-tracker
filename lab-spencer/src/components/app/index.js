import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createAppStore from '../../lib/store.js';
import DashboardContainer from '../dashboard-container';

import {log, logError} from '../../lib/util.js';

const store = createAppStore();

class App extends React.Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
