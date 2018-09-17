import React, { Component, Fragment } from 'react'

class MoveWall extends Component {
  constructor () {
    super()

    this.state = {
      movies: [],
      isLoaded: false
    }
  }

  componentDidUpdate () {
    fetch('https://api.example.com/items')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.items,
            isLoaded: true
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  movieGrid (list) {
    const movies = list

    movies.map(movie => {
      console.log(movie)
    })
  }

  render () {
    return (
      <Fragment>
        { (this.state.MovieResult !== undefined && this.state.MovieResult.length > 0) ? 'No movies' : 'We have movies'}
        <div>
        Movie Wall
        </div>
      </Fragment>
    )
  }
}

export default MoveWall
