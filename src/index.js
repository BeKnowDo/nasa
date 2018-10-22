import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { injectGlobal } from 'styled-components'
import { Provider } from 'react-redux'

import Master from './layout/master'
import RouterComponent from './components/Router'

import storeConfig from './store'

const store = storeConfig().store
const history = storeConfig().history

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
    <Master>
      <Router>
        <ConnectedRouter history={history}>
          <Switch>
            <RouterComponent />
          </Switch>
        </ConnectedRouter>
      </Router>
    </Master>
  </Provider>
  ,
  document.getElementById('root')
)
