import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'

import MovieWall from '../components/MovieWall'
import MovieDetail from '../components/MovieDetail'

// import actions
import { movieActions, movieDetailActions } from '../store/actions'

class Movies extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)
  }
  render () {
    return (
      <Fragment>
        <MovieDetail match={this.props.match} details={this.props.details} fetchMovieDetail={this.props.fetchMovieDetail} />
        <MovieWall history={this.props.history} {...this.props.movies} fetchMovies={this.props.fetchMovies} fetchMovieDetail={this.props.fetchMovieDetail} />
      </Fragment>
    )
  }
}

const mapStatetoProps = (state, ownProps) => {
  const movies = state.movies
  const details = state.details

  return {
    // history: { ...history },
    movies: {
      ...movies,
      ...ownProps
    },
    details: {
      ...details
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: bindActionCreators(movieActions.fetchMovies, dispatch),
    fetchMovieDetail: bindActionCreators(movieDetailActions.fetchMovieDetail, dispatch)
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Movies))
