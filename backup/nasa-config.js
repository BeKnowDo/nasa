const NasaKey = '48b43c71c226d58239efb833d05ab17c'
const enpoints = {
  baseUrl: 'https://developers.themoviedb.org/3',
  auth: `/authentication/token/new?api_key=${NasaKey}`,
  search: `/search/movie?api_key=${NasaKey}`
}

export { enpoints }
