import { colors, sizes, typography } from '@styles/design-tokens'
import styled from 'styled-components'

export const CareersContainerSC = styled.div`
  padding: 20px;

  .image-columns {
    padding-top: 0;
    margin-top: 0;
    align-items: flex-start;

    .column {
      &:first-child {
        margin-top: 60px;
      }
    }
  }

  .jobs-header {
    font-size: 30px;
  }

  .hero-header {
    font-size: 40px;
    line-height: 120%;
    em {
      display: block;
      font-style: normal;
      color: ${colors.secondaryMain900};
    }
  }

  @media (min-width: ${sizes.tablet}) {
    .hero-header {
      padding-top: 80px;
    }
  }
`

export const CareerDetailContainerSC = styled(CareersContainerSC)`
  .hero {
    box-shadow: 6px 6px 36px rgba(66, 83, 107, 0.06), -4px -4px 13px #ffffff,
      4px 4px 7px rgba(66, 83, 107, 0.07);
    border-radius: 9px;
    background-color: ${colors.neutralLightMain500};
    padding: 40px;
    margin-top: 48px;
    .columns {
      align-items: center;
      align-content: center;
    }

    .hero-header {
      padding-top: 0;
    }
  }

  .cta-column {
    text-align: center;
  }

  .department {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${colors.neutralDarkVariant400};
    font-family: ${typography.subHeadings};
    margin-bottom: 15px;
  }

  .career-title {
    font-family: ${typography.headings};
    margin-bottom: 12px;
    font-size: 30px;
  }

  .feature-list {
  }

  .description {
    font-family: ${typography.copy};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${typography.headings};
      margin: 48px 0 12px;
    }

    ul {
      list-style-type: disc;
      padding: 0 0 0 20px;
      margin: 20px 0 0;
    }

    li {
      margin: 0 0 10px;
    }
  }
`
