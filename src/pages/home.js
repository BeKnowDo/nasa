import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import PictureOfTheDay from '../components/Picture-of-the-day'
import MovieWall from '../components/MovieWall'

import { endpoints } from '../config/endpoints'

class Home extends Component {
  componentDidMount () {
    axios.get(endpoints.NASA.POTD)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    return (
      <Fragment>
        <PictureOfTheDay />
        <MovieWall />
      </Fragment>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    movies: state.movies.list,
    picture: state.picture.url
  }
}

export default connect(mapStatetoProps)(Home)
