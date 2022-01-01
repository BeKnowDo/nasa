import styled from 'styled-components'

import { CardSC } from '@components/Base/styles'
import { HeroSectionWrapper } from '@components/HeroSection/HeroSectionWrapper'

import { colors, sizes } from '@styles/design-tokens'

export const AreaExpertiseSC = styled.section`
  width: 100%;
  background-color: ${colors.primaryMain900};
  padding: 3rem 1rem;
`

export const ServicesCoverSC = styled.section`
  width: 100%;
  padding: 3.5rem 1rem 4rem 1rem;
  background-color: ${colors.primaryMain900};
`

export const BrandScrollWrapperSC = styled.ul`
  list-style: none;
  display: flex;
  overflow-x: scroll;
  height: 100px;
  align-items: center;
  justify-content: center;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: ${sizes.tablet}) {
    height: 150px;
  }
`

export const TrustUsWrapperSC = styled.div`
  padding: 2.5rem 1rem;
`

export const ServiceCardColumnSC = styled(CardSC)`
  padding: 2rem 1rem;
  margin: 3rem auto;

  width: 100%;

  h1 {
    width: 60%;
  }

  @media screen and (min-width: ${sizes.tablet}) {
    padding: 2rem 5rem;
    margin: 6rem auto;
  }
`

export const CaseStudiesHeroSC = styled(HeroSectionWrapper)`
  background-color: ${colors.secondaryVariant800};
`

export const TabsContainerSC = styled.ul`
  list-style: none;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100px;
  display: -webkit-box;
  padding-right: 1rem;
  margin-top: 40px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  li:first-child {
    button {
      padding: 20px 24px;
    }
  }

  li {
    position: relative;
    margin: 1%;
    float: left;

    button {
      padding: 10px 24px 10px 0;

      label {
        white-space: nowrap;
      }
    }
  }
`

export const TabsContentSC = styled.div`
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 49% 49%;
    grid-column-gap: 1rem;
  }
`

export const GetInTouchImageSC = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 220px;

  @media screen and (min-width: ${sizes.tablet}) {
    top: -90px;
    width: 480px;
  }
`
