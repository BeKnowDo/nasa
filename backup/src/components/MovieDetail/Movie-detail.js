import React, { PureComponent } from 'react'
import moment from 'moment'
import accounting from 'accounting-js'

import { FaQuestion } from 'react-icons/fa'

import { MDB } from '../../config/endpoints'
import {
  MovieContainer,
  MovieContent,
  MovieDescription,
  MovieTitle
} from './styles'

import Rating from '../Rating'
import MovieTable from '../MovieTable'

class MovieDetail extends PureComponent {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.fetchMovieDetail(id)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.id && this.props.match.params.id !== nextProps.match.params.id) {
      const id = nextProps.match.params.id
      this.props.fetchMovieDetail(id)
    }
  }

  render () {
    console.log(this.props.details)
    const data = this.props.details || undefined
    const adult = data.adult || undefined
    const title = data.title || undefined
    const budget = data.budget <= 0 ? <FaQuestion /> : accounting.formatMoney(data.budget, { precision: 0 })
    const genres = data.genres || undefined
    const poster = data.poster_path || undefined
    const description = data.overview || undefined
    const rateCount = data.vote_count || undefined
    const rating = data.vote_average || undefined
    const imdb = data.imdb_id || undefined
    const id = data.id || undefined
    const revenue = data.revenue <= 0 ? <FaQuestion /> : accounting.formatMoney(data.revenue, { precision: 0 })
    const status = data.status || undefined
    const postUrl = poster ? MDB.imageUrl + poster : ''
    const releaseDate = moment(data.release_date).isValid() ? moment(data.release_date).format('M/D/YY') : 'not valid date'

    const tableData = {
      adult,
      title,
      budget,
      genres,
      poster,
      description,
      rateCount,
      rating,
      imdb,
      id,
      revenue,
      status,
      postUrl,
      releaseDate
    }

    return (
      <MovieContainer poster={postUrl}>

        <MovieContent poster={postUrl}>
          <MovieTitle>{title}</MovieTitle>
          <div>
            {adult}
          </div>

          <MovieDescription>
            <h2>What's the movie about?</h2>
            <p>
              {description}
            </p>
          </MovieDescription>

          <MovieTable
            headers={[
              {
                name: 'Released'
              },
              {
                name: 'Links'
              },
              {
                name: 'Budget'
              },
              {
                name: 'Poster'
              },
              {
                name: 'Revenue'
              },
              {
                name: 'Status'
              }
            ]}
            body={tableData}
          />

          <Rating initialRating={rating} />

        </MovieContent>

        { genres.map(genre => {
          return genre.name
        }) }

      </MovieContainer>
    )
  }
}

// export default MovieDetail

export default MovieDetail

// 48b43c71c226d58239efb833d05ab17c
