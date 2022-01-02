import moment from 'moment'
import React, { PureComponent, useEffect, useState } from 'react'
import { FiDownloadCloud as DownloadIcon } from 'react-icons/fi'
import { CircleLoader } from 'react-spinners'

import {
  PictureOfTheDaySc,
  ImageWrapperSc,
  ToggleButton,
  DownloadLinkSc,
  CircleLoaderSc,
} from './styles'

export const PictureOfTheDay = () => {
  const [hdEnabled, setHdEnabled] = useState(false)

  useEffect(() => {
    fetchPicture()
    return () => {}
  }, [])

  const hdControl = () => {
    return (
      <ToggleButton
        role="button"
        tabIndex="0"
        aria-pressed="false"
        onClick={this.hdHandleToggle}
        hd={this.state.hdEnabled}
      >
        <span>HD</span>
      </ToggleButton>
    )
  }

  const hdHandleToggle = () => {
    this.setState({
      hdEnabled: !this.state.hdEnabled,
    })
  }

  const imageContainer = () => {
    const date = moment(this.props.date)
    const day = date.format('dddd')
    const month = date.month()
    const year = date.year()
    const imgUrl = this.props.url
    const hdurl = this.props.hdurl
    const currentImageUrl = this.state.hdEnabled ? hdurl : imgUrl

    return (
      <ImageWrapperSc background={currentImageUrl}>
        <h2>
          Picture of the Day: {`${day} ${month}, ${year}`}
          <DownloadLinkSc
            href={currentImageUrl}
            target="_blank"
            title="Download NASA's Image of the Day"
            download
          >
            <DownloadIcon />
          </DownloadLinkSc>
        </h2>

        <img src={currentImageUrl} alt="NASA's treat of the day" />

        {this.hdControl()}
      </ImageWrapperSc>
    )
  }

  return (
    <PictureOfTheDaySc>
      {this.props.isFetching ? (
        <CircleLoaderSc>
          <CircleLoader
            sizeUnit={'px'}
            size={150}
            color={'rgb(54, 215, 183)'}
            loading
          />
        </CircleLoaderSc>
      ) : (
        this.imageContainer()
      )}
    </PictureOfTheDaySc>
  )
}
