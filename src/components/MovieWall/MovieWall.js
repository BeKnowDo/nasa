import React, { Component } from 'react'
import { MDB } from '../../config/endpoints'
import { MovieWallSc } from './styles'

class MoveWall extends Component {
  constructor () {
    super()
    this.state = {
      movies: null,
      isLoaded: false
    }
  }

  componentDidMount () {
    fetch(`${MDB.baseUrl}${MDB.search}&language=en-US&query=NASA&page=1&include_adult=false`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            movies: result.results,
            isLoaded: true
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: false,
            error
          })
        }
      )
  }

  movieGrid (list) {
    const movies = list

    return (

      <ul>

        {
          movies.map(movie => {
            // console.log(movie.poster_path)
            // console.log(movie.poster_path)
            const backDrop = movie.backdrop_path ? `${MDB.imageUrl}${movie.backdrop_path}` : null
            const poster = movie.poster_path ? `${MDB.imageUrl}${movie.poster_path}` : null
            const title = movie.original_title

            return (
              <li key={movie.id}>
                {/* { backDrop !== null ? <img src={backDrop} alt={title} /> : undefined } */}
                { poster !== null ? <img src={poster} alt={title} /> : undefined }
              </li>
            )
          })
        }

      </ul>

    )
  }

  render () {
    return (
      <MovieWallSc>
        { this.state.movies === null ? 'No movies' : this.movieGrid(this.state.movies) }
      </MovieWallSc>
    )
  }
}

export default MoveWall
