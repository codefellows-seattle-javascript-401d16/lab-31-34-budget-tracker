import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import CreateAppStore from '../../lib/store.js';
import DashboardContainer from '../dashboard-container';

const store = CreateAppStore();

class App extends React.Component {

  componentDidMount() {
    store.subscribe(() => {
      console.log('<<<<<<<<<<STATE>>>>>>>>>>>', store.getState());
    });

    store.dispatch({type: null});
  }

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
