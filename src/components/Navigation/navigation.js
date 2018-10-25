import { Link } from 'react-router-dom'

import { NavigationSc } from './styles'

// import routes
import { routeNames } from '../../routes'

import React from 'react'

const Navigation = () => {
  return (
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
  )
}

export default Navigation
