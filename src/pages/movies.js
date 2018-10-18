import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import MovieWall from '../components/MovieWall'
import MovieDetail from '../components/MovieDetail'

// import actions
import { movieActions, movieDetailActions } from '../store/actions'

class Movies extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <Fragment>
        <MovieDetail {...this.props} />
        <MovieWall {...this.props} />
      </Fragment>
    )
  }
}

const mapStatetoProps = (state) => {
  const movies = state.movies
  const details = state.details

  return {
    movies: {
      ...movies
    },
    details: {
      ...details
    }
  }
}

const mapDispatchToProps = {
  ...movieActions,
  ...movieDetailActions
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Movies))
