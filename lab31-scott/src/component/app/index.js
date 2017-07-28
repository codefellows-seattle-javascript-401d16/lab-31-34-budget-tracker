import React from 'react';
//saves our store and connects all other components with the store
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from '../dashboard';
//import store module that creates our store based on the app state
import createAppStore from '../../lib/store.js';
// import '../../style/main.scss';

//assigning the store to a varible to pass in to the Provider component
const store = createAppStore();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    store.dispatch({type: 'CATEGORY_CREATE', payload: {name: 'Europe Trip', budget: 2000, id: 123, timestamp: 321}});
    store.dispatch({type: 'CATEGORY_CREATE', payload: {name: 'Canada Trip', budget: 1000, id: 456, timestamp: 321}});
    store.dispatch({type: 'CATEGORY_CREATE', payload: {name: 'Brazil Trip', budget: 4000, id: 789, timestamp: 321}});
    store.dispatch({type: 'CATEGORY_CREATE', payload: {name: 'Australia Trip', budget: 7000, id: 987, timestamp: 321}});
    store.dispatch({type: 'EXPENSE_CREATE', payload: {title: 'Plane Ticket', amount: 400, id: 123, categoryID: 123, timestamp: 321}});
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
