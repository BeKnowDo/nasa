import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/home'

// Keep it simple - we can easily maintain all route names with a simple object containing constants
const routeNames = {
  HOME: {
    unique: 'HOME',
    name: 'Home',
    to: '/'
  },
  SEARCH: {
    unique: 'SEARCH',
    name: 'Search NASA Images',
    to: '/search'
  }
}

// Create routes array to export to our Router
const routes = [
  {
    path: routeNames.HOME.to,
    unique: routeNames.HOME.unique,
    exact: 'exact',
    component: Home
  }
]

// Create our stateless component which we'll export
const RouteComponent = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
)

export {
  routeNames,
  routes,
  RouteComponent
}
