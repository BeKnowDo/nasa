import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                  onClick={() => {
                    // this.props.fetchMovieDetail(id)
                    // console.log('here')
                    // return (<Redirect push to={`/movies/${id}`} />)
                  }}
                >

                  <Link to={`/movies/${id}`}>
                    {poster !== null ? <img src={poster} alt={title} /> : undefined}
                  </Link>
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
