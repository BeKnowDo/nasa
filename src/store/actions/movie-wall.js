import axios from 'axios'
import { MDB } from '../../config/endpoints'

import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SET_ACTIVE_MOVIE
} from '../constants'

// Notify we're fetching the picture
export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES
})

// notify of errors
export const fetchMoviesError = () => ({
  type: FETCH_MOVIES_ERROR
})

// notify of success
export const fetchMoviesSuccess = data => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: data
})

export const setActiveMovie = data => {
  return dispatch => {
    dispatch({
      type: SET_ACTIVE_MOVIE,
      payload: data
    })
  }
}

// fetch movies
export const fetchMovies = () => {
  console.log('fetching movies')
  return async dispatch => {
    dispatch(fetchMoviesRequest())
    try {
      await axios.get(`${MDB.baseUrl}${MDB.search}&language=en-US&query=NASA&page=1&include_adult=false`)
        .then(response => {
          const data = response.data.results
          dispatch(fetchMoviesSuccess(data))
        })
    } catch (error) {
      dispatch(fetchMoviesError(error))
    }
  }
}
