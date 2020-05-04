import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.light3};
  border-radius: 10px;
`
