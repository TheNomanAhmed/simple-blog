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
        <p>
          This is a starter Blog created using MDX and styled components in
          GatsbyJS
        </p>

        <ContentCard
          date="2012-11-03"
          title="Somthing Demo"
          excerpt="Lets edit some data , but the muted purring of the blowers and the amplified breathing of the fighters. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station. He woke and found her stretched beside him in the dark, curled in his devotion to esoteric forms of tailor-worship. 
"
          slug="/posts"
        ></ContentCard>
      </Content>
    </Container>
  )
}

export default IndexPage
