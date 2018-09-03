import Home from '../pages/home'

// Keep it simple - we can easily maintain all route names with a simple object containing constants
const routeNames = [{
  unique: 'HOME',
  name: 'Home',
  to: '/',
  exact: true,
  component: Home
},
{
  unique: 'SEARCH',
  name: 'NASA Image Search',
  to: '/search',
  exact: true
}
]

export {
  routeNames
}
