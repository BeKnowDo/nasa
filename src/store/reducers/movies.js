import { GET_MOVIES } from '../constants'

const movieState = {
  list: []
}

export default function (state = movieState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        list: action.data
      }

    default:
      return state
  }
}
