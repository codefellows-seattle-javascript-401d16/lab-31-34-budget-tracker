import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import DashboardContainer from '../dashboard-container'

class App extends React.Component{
  render() {
    <div>
      <Provider>
        <BrowserRouter>
          <Route exact path='/' component={DashboardContainer}>
        </BrowserRouter>
      </Provider>
    </div>
  }
}
