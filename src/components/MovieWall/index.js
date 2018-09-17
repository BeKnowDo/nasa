import React, { Component, Fragment } from 'react'
import { MDB } from '../../config/endpoints'

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

    return movies.map(movie => {
      const backDrop = `${MDB.imageUrl}${movie.poster_path}`
      const poster = `${MDB.imageUrl}${movie.poster_path}`
      const title = movie.original_title

      return (
        <div key={movie.id}>
          <img src={backDrop} alt={title} />
          <img src={poster} alt={title} />
        </div>
      )
    })
  }

  render () {
    return (
      <Fragment>
        { this.state.movies === null ? 'No movies' : this.movieGrid(this.state.movies) }
      </Fragment>
    )
  }
}

export default MoveWall
