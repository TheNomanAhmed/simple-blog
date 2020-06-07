import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    height: 50px;
    fill: ${props => props.theme.colors.secondary1};
  }

  & .nav-items {
    display: flex;
    align-items: center;

    a {
      margin-left: 10px;
      text-decoration: none;
      color: ${props => props.theme.colors.secondary1};
    }

    & a:hover {
      color: ${props => props.theme.colors.secondary2};
    }

    span {
      /* height: 20px;
      width: 20px; */
      background: ${props => props.theme.colors.primary2};
      color: ${props => props.theme.colors.secondary1};

      padding: 4px 8px;
      cursor: pointer;
      /* border-radius: 100%; */
      display: inline-block;
      position: relative;
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
