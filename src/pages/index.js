import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <h1>
          Hello{" "}
          <span role="img" aria-label="Wave hand">
            👋
          </span>
        </h1>
        <h2>
          This is a starter Blog created by &copy; Noman Ahmed Khan using MDX
          and styled components in GatsbyJS
        </h2>

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
