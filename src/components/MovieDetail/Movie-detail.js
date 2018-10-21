import React, { PureComponent } from 'react'
import { MovieContainer } from './styles'

class MovieDetail extends PureComponent {
  componentDidMount () {
    console.log(this.props)
    const id = this.props.match.params.id
    this.props.fetchMovieDetail(id)
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
        <h1>
          {title}
        </h1>
        <div>
          {adult}
        </div>
        <div>
          {description}
        </div>
        <div>
          {rateCount}
        </div>
        <div>
          {rating}
        </div>
        <div>
          {releaseDate}
        </div>
        <div>
          {imdb}
        </div>
        <div>
          {id}
        </div>
        <div>
          {budget}
        </div>
        <div>
          {poster}
        </div>
        <div>
          {revenue}
        </div>
        <div>
          {status}
        </div>

        { genres.map(genre => {
          return genre.name
        }) }

      </MovieContainer>
    )
  }
}

export default MovieDetail

// 48b43c71c226d58239efb833d05ab17c
