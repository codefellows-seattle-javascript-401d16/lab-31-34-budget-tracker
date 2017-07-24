import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import createAppStore from '../../lib/store.js'
import DashboardContainer from '../dashboard-container'

const store = createAppStore()

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => console.log('+++STATE+++'))
    store.dispatch({ type: null })
  }

  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" Component="DashboardContainer" />
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}
