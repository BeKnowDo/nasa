import React from 'react'
import { Route } from 'react-router-dom'

// import routes
import {
  routeNames
} from '../../routes'

const RouterComponent = ({ history }) => {
  return (
    routeNames.map((route) => {
      return (
        <Route
          exact={!!route.exact}
          key={route.unique}
          path={route.to}
          component={route.component}
        />
      )
    })
  )
}

export default RouterComponent
