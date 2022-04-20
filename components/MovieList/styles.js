import styled from '@emotion/styled'

export const ContentWrapper = styled.div`
  text-align: center;
  svg {
    margin: 0 auto;
  }
`

export const MovieListContainer = styled.div`
  ${
    '' /* display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  width: calc(100% - 40px); */
  }
  padding: 20px;
  display: grid;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media(min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media(min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`

export const MovieListRow = styled.div`
  width: 100%;
`
