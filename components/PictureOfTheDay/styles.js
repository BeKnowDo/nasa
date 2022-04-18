import styled from '@emotion/styled'
import { colors } from '@styles/design-tokens'

export const PictureOfTheDaySC = styled.img`
  display: block;
`

export const PictureOfTheDayTitle = styled.h1`
  padding: 20px;
  color: ${colors.cornflower};
  font-size: 24px;

  span {
    color: ${colors.selectiveYellow};
  }
`
