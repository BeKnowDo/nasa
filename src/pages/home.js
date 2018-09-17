import React, { Component, Fragment } from 'react'
import axios from 'axios'
import PictureOfTheDay from '../components/Picture-of-the-day'
import MovieWall from '../components/MovieWall'

import { endpoints } from '../config/endpoints'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      potd: null
    }
  }

  componentDidMount () {
    axios.get(endpoints.NASA.POTD)
      .then(response => {
        this.setState({
          potd: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    const { potd } = this.state
    return (
      <Fragment>
        { potd !== null ? <PictureOfTheDay {...potd} /> : undefined }
        <MovieWall />
      </Fragment>
    )
  }
}

export default Home
