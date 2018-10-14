import styled, { keyframes } from 'styled-components'
import { colors, typography, backgrounds, device } from '../../styles/variables'
import ContentZoom from 'react-content-zoom'

const backgroundAnimation = keyframes`
  0% {
    background-position: right center;
  }
  25% {
    background-position: center center;
  }
  50% {
    background-position: left center;
  }
  75% {
    background-position: center center;
  }
  100% {
    background-position: right center;
  }
`

const ContentZoomSc = styled(ContentZoom)`
  .zoomed-image {
    background-size: cover;
    cursor: pointer;
  }
`

const CircleLoaderSc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  background-color: rgba(3,3,3,.8);
`

const PictureOfTheDaySc = styled.div`
  position: relative;
  overflow: hidden;
  z-index: auto;

  h2 {
    ${typography.alegreya};
    border-radius: 4px;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 1);
    background-color: ${colors.black};
    color: ${colors.white};
    font-weight: 700;
    font-size: 20px;
    text-align: center;

    box-sizing: border-box;

    padding: 4px 10px;
    margin: 0 auto;

    width: 96%;
    position: absolute;
    bottom: 24px;
    left: 0;
    right: 0;

    &::first-letter {
      font-size: 22px;
      margin-right: 1px;
      color: ${colors.red};
    }
  }

  @media ${device.tablet} {
    h2 {
      font-size: 42px;

      &::first-letter {
        font-size: 50px;
      }
    }
  }

`

const DescriptionSc = styled.p`
  padding: 10px;
  color: ${colors.black};
  line-height: 140%;
`

const ImageWrapperSc = styled.div`
  position: relative;
  overflow: hidden;
  ${props => props.background ? `
    height: 60vh;
    background-image: url(${props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center;
    background-color: ${colors.black};
    animation: ${backgroundAnimation} 20s ease-in-out infinite;

    img {
      visibility: hidden;
    }


  ` : `
    img {
      display: block;
    }
  `};
`

const ToggleButton = styled.span`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  &:not(:focus) {
    animation: pulse 1s ease-in-out 1s infinite alternate;
  }

  color: ${colors.black};
  position: absolute;
  z-index: 1;
  top: 50px;
  right: 10px;

  width: 60px;
  font-weight: 700;
  font-size: 10px;

  background-color: ${colors.black};
  color: ${colors.white};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  border-radius: 4px;
  border: 1px solid ${colors.black};
  overflow: hidden;

  span {
    position: relative;
    display: block;
    padding: 6px;
    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transition: color 0.2s, background-color 0.2s, right 0.2s;
      background-color: ${props =>
    props.hd ? `${colors.green}` : `${colors.red}`};
      width: 50%;
      height: 100%;
    }
  }


  @media ${device.tablet} {

  }
`

const LoaderSc = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }

  &:before {
    content: "";
    display: block;
    z-index: 1;
    position: relative;
    left: 0;
    top: 50%;

    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 0 auto;

    box-sizing: border-box;
    border: 26px solid ${colors.black};
    border-color: ${colors.black} transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${backgrounds.blackOpacity};
  }
`

const DownloadLinkSc = styled.a`
  color: ${colors.white};
  font-size: 16px;
  padding: 0 0 0 12px;
`

const MagifyWrapper = styled.div`

  img {

  }
`
export {
  PictureOfTheDaySc,
  DescriptionSc,
  ImageWrapperSc,
  ToggleButton,
  LoaderSc,
  DownloadLinkSc,
  MagifyWrapper,
  ContentZoomSc,
  CircleLoaderSc
}
