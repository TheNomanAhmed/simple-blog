import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.secondary1};
  font-weight: 700;
  font-size: 0.875rem;
  transition: filter 0.3s ease;
  text-decoration: none;

  &:hover,
  &:focus {
    filter: brightness(110%);
  }
`
