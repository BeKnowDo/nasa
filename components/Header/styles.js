import styled from 'styled-components'

import { colors, backgrounds } from '../../styles/variables'

const HeaderSc = styled.header`
  ${backgrounds.header};
  flex-grow: 1;
  ${(props) =>
    props.sticky
      ? `
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  `
      : ''};

  h1 {
    font-size: 22px;
  }

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`

export { HeaderSc }
