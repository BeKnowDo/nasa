import { colors } from '@styles/design-tokens'
import styled from 'styled-components'

export const FooterSc = styled.footer`
  text-align: center;
  color: ${colors.black};
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  h3 {
    font-size: 10px;
    padding: 16px 0 0;
  }

  img {
    display: block;
    margin: 20px auto 0;
    max-width: 200px;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    color: ${colors.jacksonsPurple};
    &:hover {
      text-decoration: underline;
    }
  }
`
