import { combineReducers } from 'redux'
import movies from './movies'
import picture from './picture-of-the-day'

const rootReducer = combineReducers({
  movies,
  picture
})

export default rootReducer
