const nasaApiKey = 'SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR'
const NasaKey = '48b43c71c226d58239efb833d05ab17c'

const MDB = {
  baseUrl: 'https://api.themoviedb.org/3',
  imageUrl: 'https://image.tmdb.org/t/p/original/',
  auth: `/authentication/token/new?api_key=${NasaKey}`,
  search: `/search/movie?api_key=${NasaKey}`
}

const endpoints = {
  NASA: {
    POTD: `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
  }
}

export { endpoints, MDB }
