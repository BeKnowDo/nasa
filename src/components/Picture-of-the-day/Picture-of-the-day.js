import React, { PureComponent } from 'react'
import moment from 'moment'
import { FiDownloadCloud as DownloadIcon } from 'react-icons/fi'
import { connect } from 'react-redux'

import {
  PictureOfTheDaySc,
  ImageWrapperSc,
  ToggleButton,
  // LoaderSc,
  DownloadLinkSc,
  ContentZoomSc
} from './styles'

const statusContants = {
  PENDING: 'PENDING',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  FAILED: 'FAILED'
}

class PictureOfTheDay extends PureComponent {
  hdControl = () => {
    return (
      <ToggleButton
        role='button'
        tabIndex='0'
        aria-pressed='false'
        onClick={this.hdHandleToggle}
        hd={this.state.hd}
      >
        <span>HD</span>
      </ToggleButton>
    )
  };

  hdHandleToggle = () => {
    const hdUrl = this.props.hdurl

    this.setState({ loading: statusContants.PENDING })

    this.img = new Image()
    this.img.onload = this.handleLoad
    this.img.onerror = this.handleError
    this.img.src = hdUrl
  };

  handleLoad = () => {
    const hdState = this.state.hd

    this.setState({
      loading: statusContants.LOADED,
      hd: !hdState
    })
  };

  handleError () {
    this.setState({ loading: statusContants.LOADED })
  }

  ImageLoaded = ({ target: img }) => {
    const height = img.offsetHeight
    const width = img.offsetWidth

    this.setState({
      dimensions: {
        height,
        width
      }
    })
  };

  descriptionToggle = () => {};

  render (props) {
    const date = moment(this.props.date)
    const day = date.format('dddd')
    const month = date.month()
    const year = date.year()
    const imgUrl = this.props.url || undefined

    return (
      <PictureOfTheDaySc>
        <ImageWrapperSc>
          <h2>
          Picture of the Day: {`${day} ${month}, ${year}`}
            <DownloadLinkSc href={imgUrl} target='_blank' title="Download NASA's Image of the Day" download>
              <DownloadIcon />
            </DownloadLinkSc>
          </h2>

          <ContentZoomSc
            zoomPercent={200}
            largeImageUrl={this.props.hdurl}
            imageUrl={this.props.url}
            contentHeight={300} />

          {/* <LoaderSc /> */}

          {/* {this.hdControl()} */}

        </ImageWrapperSc>

      </PictureOfTheDaySc>
    )
  }
}

export default connect()(PictureOfTheDay)
