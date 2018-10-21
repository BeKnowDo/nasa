import axios from 'axios'
import { MDB, movieKey } from '../../config/endpoints'

import {
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_ERROR
} from '../constants'

export const fetchMovieDetailRequest = () => ({
  type: FETCH_MOVIE_DETAIL
})

export const fetchMovieDetailSuccess = data => ({
  type: FETCH_MOVIE_DETAIL_SUCCESS,
  payload: data
})

export const fetchMovieDetailError = () => ({
  type: FETCH_MOVIE_DETAIL_ERROR
})

// fetch movie detail
export const fetchMovieDetail = id => {
  return async dispatch => {
    dispatch(fetchMovieDetailRequest())
    try {
      await axios.get(`${MDB.baseUrl}${MDB.detail}/${id}?api_key=${movieKey}`)
        .then(response => {
          const data = response.data
          dispatch(fetchMovieDetailSuccess(data))
        })
    } catch (error) {
      dispatch(fetchMovieDetailError(error))
    }
  }
}
