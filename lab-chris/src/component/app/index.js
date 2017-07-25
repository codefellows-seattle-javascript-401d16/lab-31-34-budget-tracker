import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createAppStore from '../../lib/store.js';
import Dashboard from '../dashboard';

const store = createAppStore();

class App extends React.Component {
  componentDidMount(){
    store.subscribe(() => {
      console.log('__STATE__', store.getState());
    });

    store.dispatch({type: null});
  }

  render(){
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

export default App;
