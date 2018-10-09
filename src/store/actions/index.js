import { GET_PIC_OF_DAY, GET_MOVIES } from '../constants'

const getPicOfDay = (url) => ({
  type: GET_PIC_OF_DAY,
  url
})

const getMovies = (movies) => ({
  type: GET_MOVIES,
  movies
})

export {
  getPicOfDay,
  getMovies
}
