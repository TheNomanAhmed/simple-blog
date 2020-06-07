import React, { useEffect } from "react"
import { NavWrapper } from "../elements"
import { useStaticQuery, Link, graphql } from "gatsby"
//context
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <NavWrapper>
      <Link to="./">
        <img src={data.logo.publicURL} alt="My logo" />
      </Link>
      <div className="nav-items">
        <span onClick={toggleTheme}>{currentTheme}</span>
        <Link to="posts">Blogs</Link>
        <Link to="contact">Contact</Link>
      </div>
    </NavWrapper>
  )
}
