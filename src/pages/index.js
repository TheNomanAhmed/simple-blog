import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

import { H1, P } from "../elements"

const IndexPage = () => {
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
        <P>
          This is a starter Blog created by &copy; Noman Ahmed Khan using MDX
          and styled components in GatsbyJS
        </P>

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
