import styled from 'styled-components'
import { colors } from './../../styles/variables'

const MovieWallSc = styled.section`
  background-color: ${colors.black};

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    align-items: center;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      flex: 0 0 auto;
      justify-content: center;
      align-items: center;
      width: 170px;
      padding: 0;
      margin: 0;
    }
  }

  img {
    display: block;
  }
`

export { MovieWallSc }
