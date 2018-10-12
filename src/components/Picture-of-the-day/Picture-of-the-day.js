import React, { PureComponent } from 'react'
import moment from 'moment'
import { FiDownloadCloud as DownloadIcon } from 'react-icons/fi'
import { CircleLoader } from 'react-spinners'

import {
  PictureOfTheDaySc,
  ImageWrapperSc,
  ToggleButton,
  // LoaderSc,
  DownloadLinkSc,
  ContentZoomSc,
  CircleLoaderSc
} from './styles'

const statusContants = {
  PENDING: 'PENDING',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  FAILED: 'FAILED'
}

class PictureOfTheDay extends PureComponent {
  componentDidMount () {
    this.props.fetchPicture()
  }

  hdControl = () => {
    return (
      <ToggleButton
        role='button'
        tabIndex='0'
        aria-pressed='false'
        onClick={this.hdHandleToggle}
        hd={this.props.picture.hdurl}
      >
        <span>HD</span>
      </ToggleButton>
    )
  }

  hdHandleToggle = () => {
    const hdurl = this.props.picture.hdurl
  }

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
  }

  descriptionToggle = () => {};

  imageContainer = () => {
    const date = moment(this.props.picture.date)
    const day = date.format('dddd')
    const month = date.month()
    const year = date.year()
    const imgUrl = this.props.picture.url
    const hdurl = this.props.picture.hdurl

    return (
      <ImageWrapperSc>
        <h2>
          Picture of the Day: {`${day} ${month}, ${year}`}
          <DownloadLinkSc href={imgUrl} target='_blank' title="Download NASA's Image of the Day" download>
            <DownloadIcon />
          </DownloadLinkSc>
        </h2>

        <img src={imgUrl} />

        {this.hdControl()}

      </ImageWrapperSc>
    )
  }

  render (props) {
    return (
      <PictureOfTheDaySc>
        { this.props.picture.isFetching ? (
          <CircleLoaderSc>
            <CircleLoader
              sizeUnit={'px'}
              size={150}
              color={'rgb(54, 215, 183)'}
              loading
            />
          </CircleLoaderSc>
        ) : this.imageContainer() }
      </PictureOfTheDaySc>
    )
  }
}

export default PictureOfTheDay
