import styled from 'styled-components'
import { colors } from '../../styles/variables'

const FooterSc = styled.footer`
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
    margin: 0 auto;
    max-width: 80px;
  }

`
export { FooterSc }
