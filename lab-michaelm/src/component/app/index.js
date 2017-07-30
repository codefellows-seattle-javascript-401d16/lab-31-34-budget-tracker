import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createAppStore from '../../lib/store.js';
import DashboardContainer from '../dashboard-container';
import {log} from '../../lib/util.js';

const store = createAppStore();

class App extends React.Component {
  componentDidMount(){
    store.subscribe(() => {
      log('__STATE__', store.getState());
    });
    store.dispatch({type: null});
  }

  render(){
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
