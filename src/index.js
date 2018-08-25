import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

// import routes
import {
  routes,
  RouteComponent
} from './routes'

import Master from './layout/master'

injectGlobal`
    body {
      font-family: 'Muli', 'Roboto', Helvetica, Arial, sans-serif;
      padding: 0;
      margin: 0;
    }
    h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
`

ReactDOM.render((
  <Master>
    <Router>
      <Switch>
        {
          routes.map((route) => {
            return <RouteComponent key={route.unique} {...route} />
          })
        }
      </Switch>
    </Router>
  </Master>
),
document.getElementById('root')
)
