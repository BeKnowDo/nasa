import styled from '@emotion/styled'

export const ContentWrapper = styled.div`
  text-align: center;
  svg {
    margin: 0 auto;
  }
`

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  overflow-x: auto;
  width: calc(100vw - 40px);
  padding: 0 20px;
`

export const MovieListRow = styled.div`
  width: 100%;
`
