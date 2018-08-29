import styled from 'styled-components'
import { colors, backgrounds } from '../../styles/variables'

const NavigationSc = styled.nav`
  margin: 0;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    display: flex;
    justify-content: center;
  }

  li {
    padding: 20px 10px;
    transition: background-color .2s ease-in-out;
    text-align: center;
    position: relative;

    &:hover {
      transition: background-color .2s ease-in-out;
      ${backgrounds.navigation.items};
      position: relative;
      cursor: pointer;

      &:after {
        transition: opacity .2s ease-in-out;
        opacity: 1;
      }

      &:before {
        transition: opacity .2s ease-in-out;
        opacity: 1;
      }
    }

    &:after {
      content: '';
      opacity: 0;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      border: 1px solid ${colors.red};
      transition: opacity .2s ease-in-out;
    }

    &:before {
      opacity: 0;
      display: block;
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);

      transition: opacity .2s ease-in-out;

      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid red;
    }

  }
`

export { NavigationSc }
