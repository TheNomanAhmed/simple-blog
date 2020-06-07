import styled from "styled-components"

export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  /* grid-template-rows: 4.8rem 14rem 14rem 26rem auto; */
  gap: 0 2rem;
  background-color: ${props => props.theme.colors.primary1};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    /* grid-template-rows: 4.8rem 14rem 15rem 26rem auto; */
  }
  @media ${props => props.theme.breakpoints.smallMobile} {
    /* grid-template-columns: 1rem repeat(6, 1fr) 1rem; */
    /* grid-template-rows: 4.8rem 12rem 26rem auto; */
  }
`
