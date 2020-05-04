import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from "../components"

import { P, H1 } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Home Page
        </H1>
        <P color="dark2" textAlign="center">
          Some paragpraph Then a mist closed over the black water and the
          dripping chassis of a broken mirror bent and elongated as they fell.
          They were dropping, losing altitude in a canyon of rainbow foliage, a
          lurid communal mural that completely covered the hull of the Villa
          bespeak a turning in, a denial of the bright void beyond the hull.
          Molly hadn’t see arrow wedge of light from a half-open service hatch
          at the rear of the arcade showed him broken lengths of damp chipboard
          and the dripping chassis of a gutted game console. Then a mist closed
          over the black water and the robot gardener. A narrow wedge of light
          from a half-open service hatch framed a heap of discarded fiber optics
          and the chassis of a broken mirror bent and elongated as they fell.
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export const pageQuery = graphql`
  query AllPostQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            excerpt
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default allPosts
