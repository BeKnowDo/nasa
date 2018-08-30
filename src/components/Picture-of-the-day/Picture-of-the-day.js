import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import axios from "axios";

import { colors, typography, backgrounds } from "../../styles/variables";
import Img from "../Image";

const statusContants = {
  PENDING: "PENDING",
  LOADING: "LOADING",
  LOADED: "LOADED",
  FAILED: "FAILED"
};

const PictureOfTheDaySc = styled.div`
  position: relative;
  z-index: auto;

  h2 {
    ${typography.alegreya};
    font-weight: 700;
    font-size: 30px;
    color: ${colors.white};
    padding: 0 40px 20px;
    position: absolute;
    bottom: 4%;
    text-shadow: 0 2px 4px rgba(3, 3, 3, 1);

    &::first-letter {
      font-size: 50px;
      margin-right: 3px;
      color: ${colors.red};
    }
  }
`;

const DescriptionSc = styled.p`
  padding: 10px;
  color: ${colors.black};
  line-height: 140%;
`;

const ImageWrapperSc = styled.div`
  position: relative;
`;

const ButtonSc = styled.span`
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
  right: 20px;
  top: 80px;

  width: 80px;
  font-weight: 700;
  font-size: 12px;
  background-color: ${colors.black};
  color: ${colors.white};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  border-radius: 4px;
  border: 1px solid ${colors.black};
  overflow: hidden;

  span {
    position: relative;
    padding: 6px 6px 6px 12px;
    display: block;
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
`;

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
`;

class PictureOfTheDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hd: false,
      loading: statusContants.LOADED,
      showDescription: false
    };
  }

  hdControl = () => {
    return (
      <ButtonSc
        role="button"
        tabIndex="0"
        aria-pressed="false"
        onClick={this.hdHandleToggle}
        hd={this.state.hd}
      >
        <span>HD</span>
      </ButtonSc>
    );
  };

  hdHandleToggle = () => {
    const hdUrl = this.props.hdurl;

    this.setState({ loading: statusContants.PENDING });

    this.img = new Image();
    this.img.onload = this.handleLoad;
    this.img.onerror = this.handleError;
    this.img.src = hdUrl;
  };

  handleLoad = () => {
    const hdState = this.state.hd;

    this.setState({
      loading: statusContants.LOADED,
      hd: !hdState
    });
  };

  handleError() {
    this.setState({ loading: statusContants.LOADED });
  }

  descriptionToggle = () => {};

  render(props) {
    const date = moment(this.props.date);
    const day = date.format("dddd");
    const month = date.month();
    const year = date.year();

    return (
      <PictureOfTheDaySc>
        <ImageWrapperSc>
          <h2>Picture of the Day for {`${day} ${month}, ${year}`}</h2>
          <Img src={this.state.hd ? this.props.hdurl : this.props.url} />
          {this.state.loading === statusContants.PENDING ? (
            <LoaderSc />
          ) : (
            undefined
          )}

          {this.hdControl()}
        </ImageWrapperSc>
      </PictureOfTheDaySc>
    );
  }
}

export default PictureOfTheDay;
