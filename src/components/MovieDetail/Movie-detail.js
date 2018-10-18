import React, { PureComponent } from 'react'
import { MovieContainer } from './styles'

class MovieDetail extends PureComponent {

  componentDidMount () {
    this.props.fetchMovieDetail(this.props.match.params.id)
  }

  render () {
    const data = this.props.details
    const adult = data.adult
    const title = data.title
    const budget = data.budget
    const genres = data.genres
    const poster = data.poster_path
    const description = data.overview
    const rateCount = data.vote_count
    const rating = data.vote_average
    const releaseDate = data.release_date
    const imdb = data.imdb_id
    const id = data.id
    const revenue = data.revenue
    const status = data.status

    return (
      <MovieContainer>
        {title}
        {adult}
        {description}
        {rateCount}
        {rating}
        {releaseDate}
        {imdb}
        {id}
        {budget}
        {poster}
        {revenue}
        {status}

        {genres.map(genre => {
          return genre.name
        })}

      </MovieContainer>
    )
  }
}

export default MovieDetail

// 48b43c71c226d58239efb833d05ab17c
