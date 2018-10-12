import styled from 'styled-components'
import { colors } from './../../styles/variables'

const MovieWallSc = styled.section`
  background-color: ${colors.black};

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
    li {
      flex: 0 0 auto;
      width: 23%;
      padding: 0;
      margin: 0;

    }
  }

  img {
    display: block;
  }
`

export { MovieWallSc }
