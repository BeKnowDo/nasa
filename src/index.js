import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { injectGlobal } from 'styled-components'

// import routes
import {
  routeNames
} from './routes'

import Master from './layout/master'

// Redux store management
import { Provider } from 'react-redux'

import storeConfig from './store'

const store = storeConfig().store
const persistor = storeConfig().persistor

injectGlobal`
    body {
      font-family: 'Muli', 'Roboto', Helvetica, Arial, sans-serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
    img { max-width: 100%; }
`

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Master>
        <Router>
          <Switch>
            {
              routeNames.map((route) => {
                return (
                  <Route
                    key={route.unique}
                    path={route.to}
                    component={route.component}
                    exact={!!route.exact}
                  />
                )
              })
            }
          </Switch>
        </Router>
      </Master>
    </PersistGate>

  </Provider>
  ,
  document.getElementById('root')
)
