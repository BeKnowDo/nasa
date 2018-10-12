import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import PictureOfTheDay from '../components/Picture-of-the-day'
import MovieWall from '../components/MovieWall'

// import actions
import { fetchPicture } from '../store/actions'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <PictureOfTheDay {...this.props} />
        <MovieWall />
      </Fragment>
    )
  }
}

const mapStatetoProps = (state) => {
  const picture = state.picture

  return {
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

export default connect(mapStatetoProps, { fetchPicture })(Home)
