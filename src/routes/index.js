import Home from '../pages/home'
import Movies from '../pages/movies'

// Keep it simple - we can easily maintain all route names with a simple object containing constants
const routeNames = [
  {
    unique: 'HOME',
    name: 'Home',
    to: '/',
    exact: true,
    show: true,
    component: Home
  },
  {
    unique: 'SEARCH',
    name: 'NASA Image Search',
    to: '/search',
    exact: true,
    show: true
  },
  {
    unique: 'MOVIES',
    name: 'Movie Detail Page',
    to: '/movies/:id',
    show: false,
    component: Movies
  }
]

export {
  routeNames
}
