const nasaApiKey = 'SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR'
const movieKey = '48b43c71c226d58239efb833d05ab17c'

export const MDB = {
  baseUrl: 'https://api.themoviedb.org/3/',
  imageUrl: 'https://image.tmdb.org/t/p/original/',
  auth: `/authentication/token/new?api_key=${movieKey}`,
  search: `search/movie?api_key=${movieKey}`,
  detail: `movie`,
  cast: `case`,
}

export const getMovies = `https://api.themoviedb.org/4/search/movie?api_key=${movieKey}&language=en-US&query=NASA&include_adult=false`
export const pictureOfTheDay = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
