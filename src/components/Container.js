import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"

//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.light1};
    height: 100%;

  }

`

const darkTheme = {
  background: "#000",
  text: "#fff",
  fonts: {
    main: "Muli, sans-serif",
    code: "Roboto Mono, monospace",
  },
  colors: {
    primary1: "#493657",
    primary2: "#5F4672",
    secondary1: "#E9C4D7",
    secondary2: "#DDA6C2",
    text: "#F9F0F5",
  },
  breakpoints: {
    smallMobile: "only screen and (max-width: 25rem)",
    mobile: "only screen and (max-width: 50rem)",
    tablet: "only screen and (max-width: 65rem)",
  },
  spacings: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xLarge: "4rem",
    xxLarge: "6rem",
  },
  animations: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
  },
  shadows: {
    smShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    mdShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lgShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
}

const lightTheme = {
  background: "#fff",
  text: "#000",
  fonts: {
    main: "Muli, sans-serif",
    code: "Roboto Mono, monospace",
  },
  colors: {
    primary1: "#FDF6E3",
    primary2: "#f1e6d1",
    secondary1: "#a13804",
    secondary2: "#F96B24",
    text: "#21243d",
  },
  breakpoints: {
    smallMobile: "only screen and (max-width: 25rem)",
    mobile: "only screen and (max-width: 50rem)",
    tablet: "only screen and (max-width: 65rem)",
  },
  spacings: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xLarge: "4rem",
    xxLarge: "6rem",
  },
  animations: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
  },
  shadows: {
    smShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    mdShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lgShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
}

export const Container = ({ children }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ContainerWrapper>
        <Nav />
        {children}
        <Footer />
      </ContainerWrapper>
    </ThemeProvider>
  )
}
