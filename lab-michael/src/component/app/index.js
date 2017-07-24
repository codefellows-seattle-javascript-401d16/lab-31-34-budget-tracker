import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import createAppStore from '../../lib/store.js'
import DashboardContainer from '../dashboard-container'

const store = createAppStore()


class App extends React.Component {
  componentDidMount(){
    store.subscribe(()=> {
      console.log(':::STATE:::', store.getState())
    })
    store.dispatch({type:null})
  }

  render(){
    return (
      <div>
        <Provider store={store}>
        <BrowserRouter>
        <Route exact path='/' component={DashboardContainer}/>
        </BrowserRouter>
        </Provider>
        <h1> Hello World! </h1>
        </div>
    )
  }
}

export default App
