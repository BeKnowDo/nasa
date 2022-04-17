import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'

import { NavigationSc } from './styles'
import { routeNames } from '../../routes'
import RouterComponent from '../Router'

const Navigation = () => {
  return (
    <Router>
      <div>
        <NavigationSc>
          <ul>
            {routeNames.map(route => {
              if (route.show === true) {
                return (
                  <li key={route.unique}>
                    <Link to={route.to} title={route.name}>
                      {route.name}
                    </Link>
                  </li>
                )
              } else {
                return false
              }
            })}
          </ul>
        </NavigationSc>
        <Switch>
          <RouterComponent />
        </Switch>
      </div>
    </Router>
  )
}

export default Navigation
