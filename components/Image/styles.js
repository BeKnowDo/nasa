import styled from 'styled-components'

const ImageSc = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  ${(props) => (props.onLoad ? 'position: absolute;max-width: none;' : '')};
`

export { ImageSc }
