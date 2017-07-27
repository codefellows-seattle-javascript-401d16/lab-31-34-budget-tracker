import React from 'react'
import {Provider} from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'

import Dashboard from '../dashboard'
import createAppStore from '../../lib/store.js'

const store = createAppStore()

class App extends React.Component {
  render() {
    return (
      <main>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path='/' component={Dashboard}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}

export default App