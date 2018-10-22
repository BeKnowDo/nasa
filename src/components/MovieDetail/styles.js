import styled from 'styled-components'
import { colors } from '../../styles/variables'

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    font-size: 24px;
    padding: 10px 0 30px;
  }


  ${props => props.poster ? `

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
    ` : `
  `};

`

const MovieContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  background-color: ${colors.white};

  ${props => props.poster ? `
  opacity: .9;
  border-radius: 4px;
  border: 1px solid ${colors.lightGrey};
  box-shadow: 0 1px 10px ${colors.lightGrey};
  ` : `
`};
`

export {
  MovieContainer,
  MovieContent
}
