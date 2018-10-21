import styled from 'styled-components'
import { colors } from '../../styles/variables'

const MovieContainer = styled.div`
  display: flex;
  background-color: ${colors.red};
  flex-direction: column;
  padding: 20px;

  h1 {
    font-size: 24px;
    padding: 10px 0 30px;
  }
`

export {
  MovieContainer
}
