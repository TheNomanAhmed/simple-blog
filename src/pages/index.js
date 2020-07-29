import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"
import Swiper from "react-id-swiper"

import Img from "gatsby-image"

import "swiper/swiper-bundle.css"
import { useStaticQuery, graphql } from "gatsby"
// import ClapButton from "react-clap-button"

import { H1, P } from "../elements"

const sliderParams = {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "office.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      image2: file(relativePath: { eq: "notfound.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      image3: file(relativePath: { eq: "trees.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1>
          Hello{" "}
          <span role="img" aria-label="Wave hand">
            👋
          </span>
        </H1>
        {/* <ClapButton
          count={0}
          countTotal={0}
          maxCount={5}
          isClicked={false}
          onCountChange={onCountChange}
        /> */}

        <P>
          This is a starter Blog created by &copy; Noman Ahmed Khan using MDX
          and styled components in GatsbyJS
        </P>

        <Swiper {...sliderParams}>
          <Img fluid={data.image1.childImageSharp.fluid} />
          <Img fluid={data.image2.childImageSharp.fluid} />
          <Img fluid={data.image3.childImageSharp.fluid} />
          <Img fluid={data.image2.childImageSharp.fluid} />
          <Img fluid={data.image1.childImageSharp.fluid} />
          <Img fluid={data.image2.childImageSharp.fluid} />
          <Img fluid={data.image3.childImageSharp.fluid} />
          <Img fluid={data.image2.childImageSharp.fluid} />
        </Swiper>

        <ContentCard
          date="2012-11-03"
          title="Blogs section"
          excerpt="Checkout some of my recent blogs that i have written."
          slug="/posts"
        ></ContentCard>
      </Content>
    </Container>
  )
}

export default IndexPage
