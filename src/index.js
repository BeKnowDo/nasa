import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

// import routes
import {
  routeNames
} from './routes'

import Master from './layout/master'

injectGlobal`
    body {
      font-family: 'Muli', 'Roboto', Helvetica, Arial, sans-serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
`

ReactDOM.render(
  <Master>
    <Router>
      <Switch>
        {
          routeNames.map((route) => {
            return (
              // Create our stateless component which we'll export
              <Route
                key={route.unique}
                path={route.path}
                component={route.component}
                exact={!!route.exact}
              />
            )
          })
        }
      </Switch>
    </Router>
  </Master>,
  document.getElementById('root')
)
