import styled from 'styled-components'

import { colors } from '../../styles/variables'

export const MovieTitle = styled.h2`
  text-decoration: underline;
  text-align: center;
  font-weight: 700;
  padding: 0 0 20px;
`

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  min-height: 800px;

  h1 {
    font-size: 24px;
    padding: 10px 0 30px;
  }

  p {
    font-size: 14px;
  }

  ${(props) =>
    props.poster
      ? `
  position: relative;
  :after {
    content: '';
    background-image: url(${props.poster});
    opacity: .7;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
    `
      : `
  `};
`

export const MovieContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  background-color: ${colors.white};
  color: ${colors.black};
  min-height: 400px;

  ${(props) =>
    props.poster
      ? `
  opacity: .9;
  border-radius: 2px;
  border: 1px solid ${colors.lightGrey};
  box-shadow: 0 1px 10px ${colors.black};
  `
      : `
`};
`

export const MovieDescription = styled.div`
  p {
    font-size: 14px;
    line-height: 160%;
  }
  h2 {
    font-size: 14px;
  }
`
