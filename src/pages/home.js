import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import PictureOfTheDay from '../components/Picture-of-the-day'
import MovieWall from '../components/MovieWall'

// import actions
import { pictureActions, movieActions, movieDetailActions } from '../store/actions'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <PictureOfTheDay {...this.props.picture} fetchPicture={this.props.fetchPicture} />
        <MovieWall history={this.props.history} {...this.props.movies} fetchMovies={this.props.fetchMovies} fetchMovieDetail={this.props.fetchMovieDetail} />
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

const mapDispatchToProps = dispatch => {
  return {
    fetchPicture: bindActionCreators(pictureActions.fetchPicture, dispatch),
    fetchMovies: bindActionCreators(movieActions.fetchMovies, dispatch),
    fetchMovieDetail: bindActionCreators(movieDetailActions.fetchMovieDetail, dispatch)

  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Home))
