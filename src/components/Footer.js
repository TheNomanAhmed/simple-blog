import React from "react"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"
import { useStaticQuery, graphql } from "gatsby"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      styled: file(relativePath: { eq: "styled.svg" }) {
        publicURL
      }
      gatsby: file(relativePath: { eq: "gatsby.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook Logo" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="github Logo" />
          </a>
          <a
            href="https://gatsby.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.gatsby.publicURL} alt="gatsby Logo" />
          </a>
          <a
            href="https://styled.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.styled.publicURL} alt="Styled Logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          {" "}
          Copyrights Noman Ahmed Khan{" "}
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
