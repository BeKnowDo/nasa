import { colors, sizes } from '@styles/design-tokens'
import styled from 'styled-components'

export const ProcessPageContainerSC = styled.div`
  padding: 20px;

  .top-hero {
    .hero-header {
      color: ${colors.neutralDarkMain900};
      font-size: 40px;
      line-height: 130%;
    }
    .copy {
      margin-top: 38px;
    }
  }

  .process-title {
    font-size: 12px;
    font-weight: normal;
    color: ${colors.neutralDarkMain900};
    margin: 40px 0 0;
  }

  .process-sub-title {
    font-size: 24px;
    color: ${colors.primaryMain900};
  }
`
