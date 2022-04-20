import styled from '@emotion/styled'
import { colors } from '@styles/design-tokens'

export const MovieTileContainer = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 20px;
  border: 1px solid ${colors.white};
  border-radius: 4px;
  flex-basis: 100%;
  margin: 20px 0 0 0;

  a {
    text-decoration: none;
    color: ${colors.black};

    &:hover {
      text-decoration: underline;
      text-decoration-color: ${colors.selectiveYellow};
    }
  }


  @media(min-width: 768px) {
    margin: 0 20px 20px 0;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media(min-width: 1024px) {
    &:nth-child(2n) {
      margin-right: 20px;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media(min-width: 1024px) {
    &:nth-child(2n) {
      margin-right: 20px;
    }

    &:nth-child(3n) {
      margin-right: 20px;
    }

    &:nth-child(4n) {
      ${'' /* margin-right: 0; */}
    }
  }

  @media(min-width: 1200px) {
    &:nth-child(2n) {
      margin-right: 20px;
    }

    &:nth-child(3n) {
      margin-right: 20px;
    }

    &:nth-child(4n) {
      margin-right: 20px;
    }

    &:nth-child(5n) {
      ${'' /* margin-right: 0; */}
    }
  }


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

  @media(min-width: 1024px) {
    font-size: 22px;
  }

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
