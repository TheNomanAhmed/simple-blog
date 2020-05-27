import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  grid-column: 2 / span 11;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;

  & Img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
  }
`
