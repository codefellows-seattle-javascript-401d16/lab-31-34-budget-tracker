// npm modules
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createAppStore from '../../lib/store.js';
import DashboardContainer from '../dashboard-container';

const store = createAppStore();

class App extends React.Component {

  //hooks
  componentDidUpdate() {
    store.subscribe(() => {
      console.log(':::STATE:::', store.getState());
    });
    store.dispatch({type: null});
  }
  //methods

  //render
  render() {
    return (
      <main className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;
