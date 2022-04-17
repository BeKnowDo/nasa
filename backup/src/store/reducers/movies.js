import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SET_ACTIVE_MOVIE
} from '../constants'

const movieState = {
  list: [],
  isFetching: false,
  errorMessage: '',
  activeMovie: {
    adult: '',
    title: '',
    url: '',
    id: '',
    description: '',
    releaseDate: '',
    rating: '',
    rateCount: ''
  }
}

const movieWallReducer = (state = movieState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload
      }

    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }

    case SET_ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: {
          adult: action.payload.adult,
          title: action.payload.original_title,
          url: action.payload.poster_path,
          id: action.payload.id,
          description: action.payload.overview,
          releaseDate: action.payload.release_date,
          rating: action.payload.vote_average,
          rateCount: action.payload.vote_count
        }
      }

    default:
      return state
  }
}

export default movieWallReducer
