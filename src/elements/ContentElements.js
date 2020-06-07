import styled from "styled-components"

export const ContentWrapper = styled.main`
  border-radius: 1rem;
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background: ${props => props.theme.colors.primary2};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.lgShadow};
  border: 1rem;
  z-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
  @media ${props => props.theme.breakpoints.smallMobile} {
    grid-column: 1 / span 8;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.small}`};
  }
`
