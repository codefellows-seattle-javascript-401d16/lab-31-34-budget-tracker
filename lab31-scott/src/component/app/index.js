import React from 'react';
//saves our store and connects all other components with the store
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from '../dashboard';
//import store module that creates our store based on the app state
import createAppStore from '../../lib/store.js';

//assigning the store to a varible to pass in to the Provider component
const store = createAppStore();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    //anychanges in the store, use subscribe to register it. Use the getState method on the store.
    store.subscribe(() => {
      console.log('--STATE-CHANGE--', store.getState());
    });
  }

  render(){
    return(
      <div className="app">
        <Provider
          store={store}
        >
          <BrowserRouter>
            <div>
            This is the app
              <Route
                exact path='/'
                component={DashboardContainer}
              />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
