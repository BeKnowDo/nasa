import { combineReducers } from 'redux'
import movies from './movies'
import picture from './picture-of-the-day'
import details from './movie-detail'

const rootReducer = combineReducers({
  movies,
  picture,
  details
})

export default rootReducer
