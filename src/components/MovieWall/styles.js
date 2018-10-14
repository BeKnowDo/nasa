import styled from 'styled-components'
import { colors, device } from './../../styles/variables'

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
  }

  img {
    display: block;
  }
`

const MovieWallItemSc = styled.li`
  transition: width .1s ease-in-out;
  flex: 0 0 auto;
  width: 60%;
  padding: 0;
  margin: 20px;
  ${props => props.background ? `
    background-image: url(${props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${colors.black};

    img {
      visibility: hidden;
      display: block;
    }
  ` : `
    img {
      display: block;
    }
  `};

  @media ${device.tablet} {
    width: 25%;
    transition: width .1s ease-in-out;
  }

  @media ${device.laptop} {
    width: 20%;
    transition: width .1s ease-in-out;
  }

`

export { MovieWallSc, MovieWallItemSc }
