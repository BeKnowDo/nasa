import { NavigationSc } from './styles'

// import routes
import { routeNames } from '../../routes'

import React from 'react'

const Navigation = () => {
  return (
    <NavigationSc>
      <ul>
        {routeNames.map(route => {
          return (
            <li key={route.unique}>
              <a href={route.to} title={route.name}>
                {route.name}
              </a>
            </li>
          )
        })}
      </ul>
    </NavigationSc>
  )
}

export default Navigation
