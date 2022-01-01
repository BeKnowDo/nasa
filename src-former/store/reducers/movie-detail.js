import {
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_ERROR
} from '../constants'

const movieDetailState = {
  adult: false,
  backdrop_path: null,
  belongs_to_collection: null,
  budget: 0,
  genres: [],
  homepage: null,
  id: '',
  imdb_id: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  production_companies: [],
  production_countries: [],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: '',
  tagline: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
  isFetching: false
}

const movieDetailReducer = (state = movieDetailState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_MOVIE_DETAIL_SUCCESS:
      const data = action.payload
      return {
        ...state,
        ...data
      }

    case FETCH_MOVIE_DETAIL_ERROR:
      return {
        ...state
      }
    default:
      return state
  }
}

export default movieDetailReducer
