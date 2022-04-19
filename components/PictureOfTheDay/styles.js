import styled from '@emotion/styled'
import { colors } from '@styles/design-tokens'

export const PictureOfTheDayContainer = styled.div`
  position: relative;
`
export const PictureOfTheDayImageSC = styled.img`
  display: block;
`

export const PictureOfTheDayTitle = styled.h1`
  text-align: center;
  width: calc(100% - 40px);

  padding: 10px 20px 10px;
  color: ${colors.cornflower};
  font-size: 20px;

  span {
    color: ${colors.selectiveYellow};
  }
`
