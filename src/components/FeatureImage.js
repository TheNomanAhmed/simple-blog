import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    {
      imageSharp(fluid: { originalName: { eq: "office.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <FeatureImageWrapper>
      <Img fluid={fluid ? fluid : data.imageSharp.fluid} />
    </FeatureImageWrapper>
  )
}
