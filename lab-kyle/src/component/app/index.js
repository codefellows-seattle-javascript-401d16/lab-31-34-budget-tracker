import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import createAppStore from '../../lib/store.js'
import DashboardContainer from '../dashboard-container'

const store = createAppStore()

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => console.log('+++STATE+++', store.getState()))
    store.dispatch({ type: null })
  }

  render() {
    console.log('app')
    return (
      <div className="app">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={DashboardContainer} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App
