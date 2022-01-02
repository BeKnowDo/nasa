import styled from 'styled-components'

import { colors } from '../../styles/variables'

export const MovieTableSc = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${colors.grey};
  padding: 4px;

  th,
  td {
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    padding: 8px 2px;
  }

  th {
    background-color: ${colors.transparentDarkGrey};
    color: ${colors.white};
  }

  td {
    padding: 10px 2px;

    a {
      display: block;
    }
  }

  a {
    color: ${colors.black};
  }
`

export const ImdbLink = styled.a`
  display: block;
  width: 20px;
  margin: 0 auto;
`
