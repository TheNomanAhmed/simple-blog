import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// export const CardWrapper = styled.div`
//   margin-top: 2rem;
//   padding: 2rem 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: ${props => props.theme.colors.light3};
//   border-radius: 10px;

//   &:hover,
//   &:focus {
//     filter: brightness(105%);
//   }
// `
export const CardWrapper = styled(props => <Link {...props} />)`
  text-decoration: none;
  margin-top: 2rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-radius: 1.5rem;
  border-left: 3px solid ${props => props.theme.colors.secondary2};

  transition: 0.2s ease;

  &:hover,
  &:focus {
    border-left: 3px solid ${props => props.theme.colors.secondary2};
    background-color: ${props => props.theme.colors.primary1};
  }
  p {
    margin: 0px;
  }
  h2 {
    position: relative;
    margin-bottom: 0.5rem;
  }

  a {
    margin-top: 1rem;
    display: none;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    background-color: ${props => props.theme.colors.light3};
    a {
      display: block;
    }
  }
`
