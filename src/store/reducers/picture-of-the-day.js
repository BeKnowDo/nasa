import { FETCH_PIC, FETCH_PIC_ERROR, FETCH_PIC_SUCCESS } from '../constants'

const pictureState = {
  isFetching: false,
  errorMessage: '',
  copyright: '',
  date: '',
  hdurl: '',
  url: '',
  title: '',
  description: ''
}

const pictureOfTheDayReducer = (state = pictureState, action) => {
  switch (action.type) {
    case FETCH_PIC:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_PIC_SUCCESS:
      return {
        ...state,
        isFetching: false,
        url: action.payload.url,
        hdurl: action.payload.hdurl,
        copyright: action.payload.copyright,
        date: action.payload.date,
        title: action.payload.title,
        description: action.payload.description
      }

    case FETCH_PIC_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }

    default:
      return state
  }
}

export default pictureOfTheDayReducer
