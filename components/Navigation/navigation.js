import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'

import { routeNames } from '../../routes'
import RouterComponent from '../Router'

import { NavigationSc } from './styles'

const Navigation = () => {
  return (
    <Router>
      <div>
        <NavigationSc>
          <ul>
            {routeNames.map((route) => {
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
