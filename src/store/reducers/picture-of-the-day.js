import { GET_PIC_OF_DAY } from '../constants'

const pictureState = {
  url: ''
}

export default function (state = pictureState, action) {
  switch (action.type) {
    case GET_PIC_OF_DAY:
      return {
        ...state,
        url: action.url
      }
    default:
      return state
  }
}
