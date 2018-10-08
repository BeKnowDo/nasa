const GET_PIC_OF_DAY = 'picture-of-the-day'
const GET_MOVIES = 'get-movies'

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
