import { CardSC } from '@components/Base/styles'
import { CoverContentSC } from '@components/CaseStudies/styles'
import { colors, fontSizes, sizes } from '@styles/design-tokens'
import styled from 'styled-components'

const TeamColoredSection = styled.section`
  background-color: ${(props) => props.color || colors.resolutionBlue};
`

export const BeaconsItemsSC = styled.div`
  margin-top: 6rem;

  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-row-gap: 5rem;
  }
`

export const BeaconCardSC = styled(CardSC)`
  padding: 5rem 2rem 2rem 2rem;
  margin: 5rem 0;
  position: relative;

  @media screen and (min-width: 769px) {
    margin: 1rem;
  }
`

export const BeaconProfileSpaceSC = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  border-radius: 50%;

  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.neutralLightVariant200};

  box-shadow: -3.97861px -3.97861px 15.9144px rgba(255, 255, 255, 0.25),
    3.97861px 3.97861px 7.95722px rgba(66, 83, 107, 0.09),
    inset 0px -3.97861px 15.9144px #ffffff,
    inset 0px 1.98931px 5.96792px rgba(66, 83, 107, 0.22);
`

export const BeaconProfileInnerSC = styled.div`
  background-color: ${colors.neutralLightMain500};
  border-radius: 50%;

  width: 80%;
  height: 80%;
  padding: 10px;

  box-shadow: -4.05371px -4.05371px 16.2148px #ffffff,
    4.05371px 4.05371px 8.10742px rgba(66, 83, 107, 0.4),
    inset 0px -4.05371px 16.2148px #ffffff,
    inset 0px 2.02686px 6.08057px rgba(66, 83, 107, 0.22);
`

export const LuminariesWrapperSC = styled.div`
  @media screen and (max-width: ${sizes.tablet}) {
    padding: 0 1rem;

    .column {
      min-height: 160px;
    }
  }
`

export const TeamCoverSectionSC = styled(CoverContentSC)`
  > div {
    display: flex !important;
  }

  @media screen and (max-width: ${sizes.tablet}) {
    h1 {
      font-size: ${fontSizes.large};
    }
  }
`

export const TeamLuminariesSectionSC = styled(TeamColoredSection)`
  padding-bottom: 5rem;
`

export const TeamWorkWithUsSectionSC = styled(TeamColoredSection)`
  padding: 5rem 0 12rem;

  @media screen and (max-width: ${sizes.tablet}) {
    padding: 5rem 0 2rem;
  }
`

export const TeamTextContainerSC = styled.div`
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6rem 19rem;

  @media screen and (max-width: ${sizes.tablet}) {
    padding: 2rem 1rem;
  }
`

export const TeamBeaconsWrapperSC = styled.section`
  padding: 5rem 0;
`

export const VideoPlayerWrapperSC = styled.div`
  overflow: hidden;
  border-radius: 9px;

  div {
    width: 100% !important;
  }

  @media screen and (max-width: ${sizes.tablet}) {
    position: absolute;
    top: -120px;
    width: 100%;

    div {
      height: 250px !important;
    }
  }
`

export const WorkWithusWrapperSC = styled.div`
  background-color: ${colors.neutralLightVariant200};
  border-radius: 9px;
  padding: 2rem;

  @media screen and (min-width: ${sizes.tablet}) {
    position: absolute;
    top: 50px;
    left: -100px;
    padding: 2rem 4rem;
  }
`
