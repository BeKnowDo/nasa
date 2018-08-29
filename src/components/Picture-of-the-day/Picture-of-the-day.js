import React, { Component } from 'react'
import moment from 'moment'
import styled from 'styled-components'

import { colors, typography } from '../../styles/variables'
import Img from '../Image'

const PictureOfTheDaySc = styled.div`
  position: relative;
  z-index: auto;

  h2 {
    ${typography.alegreya};
    font-weight: 700;
    font-size: 30px;
    color: ${colors.white};
    padding: 0 40px 20px;
    position: absolute;
    bottom: 4%;

    &::first-letter {
      font-size: 50px;
      margin-right: 3px;
      color: ${colors.red};
    }
  }
`

const DescriptionSc = styled.p`
  padding: 10px;
  color: ${colors.black};
  line-height: 140%;
`

const ImageWrapperSc = styled.div`
  position: relative;
`

const ButtonSc = styled.span`
  @keyframes pulse {
    0% { transform: scale(1); }
    25% { transform: scale(.8);  }
    50% { transform: scale(1);  }
    100% { transform: scale(.8);  }
    50% { transform: scale(1);  }
    25% { transform: scale(.8);  }
    100% { transform: scale(1); }
  }

  &:not(:focus) {
    animation: pulse 1s ease-in-out 1s infinite alternate;
  }

  color: ${colors.black};
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 80px;

  width: 80px;
  font-weight: 700;
  font-size: 12px;
  background-color: ${colors.black};
  color: ${colors.white};
  border-radius: 4px;
  border: 1px solid ${colors.black};
  overflow: hidden;


  span {
    position: relative;
    padding: 6px 6px 6px 12px;
    display: block;
    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transition: right .2s ease-in-out;
      background-color ${colors.red};
      width: 50%;
      height: 100%;
    }
  }
`

const hdToggle = props => {
  return (
    <ButtonSc role='button' tabIndex='0' aria-pressed='false'>
      <span>HD</span>
    </ButtonSc>
  )
}

class PictureOfTheDay extends Component {
  constructor (props) {
    super(props)
  }

  render (props) {
    const date = moment(this.props.date)
    const day = date.format('dddd')
    const month = date.month()
    const year = date.year()

    return (
      <PictureOfTheDaySc>
        <ImageWrapperSc>
          <h2>Picture of the Day for {`${day} ${month}, ${year}`}</h2>
          <Img src={this.props.url} />
          {hdToggle()}
        </ImageWrapperSc>

        <DescriptionSc>{this.props.explanation}</DescriptionSc>
      </PictureOfTheDaySc>
    )
  }
}

export default PictureOfTheDay
