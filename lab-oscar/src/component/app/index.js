import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createAppStore from '../../lib/store.js';
import DashboardContainer from '../dashboard-container';

const store = createAppStore();



class App extends React.Component {

  componentWillMount(){
   try {
     let newStore = JSON.parse(localStorage.getItem('expenseTracker'))
     newStore.categorys.forEach(item =>{
       store.dispatch({type: 'LOAD_LOCALSTORE', payload: item})
       store.dispatch({type: 'LOAD_EXPENSES', payload: item})
     });
    //  store.dispatch({type: 'LOAD_LOCALSTORE', payload: newStore.categorys});

   } catch(error) {
     console.log('ErrorHere', error);

   }
   }
  render(){
    return(
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
