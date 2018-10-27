import React from 'react'
import { Route } from 'react-router-dom'

// import routes
import {
  routeNames
} from '../../routes'

const RouterComponent = () => {
  return (
    routeNames.map((route) => {
      if (route.render) {
        return (
          <Route
            exact={!!route.exact}
            key={route.unique}
            path={route.to}
            render={route.render}
          />
        )
      } else if (route.component) {
        return (
          <Route
            exact={!!route.exact}
            key={route.unique}
            path={route.to}
            component={route.component}
          />
        )
      }
    })
  )
}

export default RouterComponent
