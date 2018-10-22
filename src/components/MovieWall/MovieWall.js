import React, { Component } from 'react'

import { MDB } from '../../config/endpoints'
import { MovieWallSc, MovieWallItemSc } from './styles'

class MoveWall extends Component {
  componentDidMount () {
    return this.props.list.length <= 0 ? this.props.fetchMovies() : false
  }

  movieGrid (list) {
    const movies = list
    return (
      <ul>
        {
          movies.map(movie => {
            const poster = movie.poster_path ? `${MDB.imageUrl}${movie.poster_path}` : null
            const title = movie.original_title
            const id = movie.id

            if (poster) {
              return (
                <MovieWallItemSc
                  key={movie.id}
                  background={poster}
                  onClick={async () => {
                    await this.props.history.push(`/movies/${id}`)
                    this.props.fetchMovieDetail(id)
                  }}
                >
                  {poster !== null ? <img src={poster} alt={title} /> : undefined}
                </MovieWallItemSc>
              )
            } else {
              return false
            }
          })
        }
      </ul>

    )
  }

  render () {
    return (
      <MovieWallSc>
        {this.props.list === undefined ? 'No movies' : this.movieGrid(this.props.list)}
      </MovieWallSc>
    )
  }
}

export default MoveWall
