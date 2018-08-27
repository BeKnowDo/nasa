import styled from 'styled-components'
import { colors, backgrounds } from '../../styles/variables'

const HeaderSc = styled.header`
  ${backgrounds.header};
  h1 {
    font-size: 22px;
  }
  flex-grow: 1;
`

export { HeaderSc }
