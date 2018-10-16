import React, { Component } from 'react'
import { Redirect } from 'react-router'

import { MDB } from '../../config/endpoints'
import { MovieWallSc, MovieWallItemSc } from './styles'

class MoveWall extends Component {
  componentDidMount () {
    console.log(this.props)
    if (!this.props.list) {
      this.props.fetchMovies()
    }
  }

  movieGrid (list) {
    const movies = list
    return (
      <ul>
        {
          movies.map(movie => {
            const poster = movie.poster_path ? `${MDB.imageUrl}${movie.poster_path}` : null
            const title = movie.original_title

            if (poster) {
              return (
                <MovieWallItemSc
                  key={movie.id}
                  background={poster}
                  onClick={() => {
                    const id = movie.id
                    this.props.fetchMovieDetail(id)
                    this.props.history.push(`/movies/${id}`)
                    return <Redirect to={`/movies/${id}`} />
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
        {this.props.movies === null ? 'No movies' : this.movieGrid(this.props.movies.list)}
      </MovieWallSc>
    )
  }
}

export default MoveWall
