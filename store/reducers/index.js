import { combineReducers } from 'redux'

import details from './movie-detail'
import movies from './movies'
import picture from './picture-of-the-day'

const rootReducer = combineReducers({
  movies,
  picture,
  details,
})

export default rootReducer
