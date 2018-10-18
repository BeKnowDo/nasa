import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import PictureOfTheDay from '../components/Picture-of-the-day'
import MovieWall from '../components/MovieWall'

// import actions
import { pictureActions, movieActions, movieDetailActions } from '../store/actions'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <PictureOfTheDay {...this.props} />
        <MovieWall {...this.props} />
      </Fragment>
    )
  }
}

const mapStatetoProps = (state) => {
  const picture = state.picture
  const movies = state.movies

  return {
    movies: {
      ...movies
    },
    picture: {
      isFetching: picture.isFetching,
      url: picture.url,
      description: picture.description,
      title: picture.title,
      copyright: picture.copyright,
      hdurl: picture.hdurl,
      date: picture.date
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPicture: pictureActions.fetchPicture,
  fetchMovies: movieActions.fetchMovies
})

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Home))
