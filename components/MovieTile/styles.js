import styled from '@emotion/styled'
import { colors } from '@styles/design-tokens'

export const MovieTileContainer = styled.div`
  color: ${colors.white};
  padding: 20px;
  border: 1px solid ${colors.white};
  border-radius: 4px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 300px;
  margin: 20px 20px 0 0;
`

export const MovieImageBackground = styled.div`
  ${(props) =>
    props.background
      ? `
        background-image: url(${props.background});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        display: block;
        min-height: 400px;
        width: 100%;
        margin: 0 0 20px;
      `
      : ``};
`

export const MovieTitle = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  color: ${colors.selectiveYellow};
`

export const MovieDescriptionTitle = styled.h4`
  margin: 0 0 10px;
`

export const MovieOverview = styled.p`
  margin: 0 0 20px;
`

export const MoviePopularity = styled.p`
  em {
    color: ${colors.selectiveYellow};
    font-style: normal;
  }
`

export const MovieReleaseDate = styled(MoviePopularity)``
