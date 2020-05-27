import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    height: 50px;
  }

  & .nav-items {
    a {
      color: #21243d;
      margin-left: 10px;
      text-decoration: none;
    }

    & a:hover {
      color: ${props => props.theme.colors.main2};
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
