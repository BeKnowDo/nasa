import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

import { colors } from '../../styles/variables'
import Img from '../Image'

const PictureOfTheDaySc = styled.div`
  h2 {
    padding: 0 0 20px;
  }
`

const Description = styled.p`
  padding: 10px;
  color: ${colors.black};
  line-height: 140%;
`

const PictureOfTheDay = props => {
  const date = moment(props.date)
  const day = date.format('dddd')
  const month = date.month()
  const year = date.year()

  return (
    <PictureOfTheDaySc>
      <h2>Picture of the Day for { `${day} ${month}, ${year}` }</h2>
      <Img src={props.url} />
      <Description>
        { props.explanation }
      </Description>
    </PictureOfTheDaySc>
  )
}

export default PictureOfTheDay
