import React, { PureComponent } from 'react'
import moment from 'moment'
import { FiDownloadCloud as DownloadIcon } from 'react-icons/fi'
import { CircleLoader } from 'react-spinners'

import {
  PictureOfTheDaySc,
  ImageWrapperSc,
  ToggleButton,
  DownloadLinkSc,
  CircleLoaderSc
} from './styles'

class PictureOfTheDay extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      hdEnabled: false
    }
  }
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
        hd={this.state.hdEnabled}
      >
        <span>HD</span>
      </ToggleButton>
    )
  }

  hdHandleToggle = () => {
    this.setState({
      hdEnabled: !this.state.hdEnabled
    })
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

    const currentImageUrl = this.state.hdEnabled ? hdurl : imgUrl

    return (
      <ImageWrapperSc background={currentImageUrl}>
        <h2>
          Picture of the Day: {`${day} ${month}, ${year}`}
          <DownloadLinkSc href={currentImageUrl} target='_blank' title="Download NASA's Image of the Day" download>
            <DownloadIcon />
          </DownloadLinkSc>
        </h2>

        <img src={currentImageUrl} />

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
