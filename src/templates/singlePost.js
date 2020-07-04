import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { H1 } from "../elements"
import { Container, Post, FeatureImage, Seo } from "../components"
import firebase from "gatsby-plugin-firebase"

const SinglePost = ({ data }) => {
  const [claps, setClaps] = useState(0)
  const [newClaps, setNewClaps] = useState(0)
  const slug = data.mdx.frontmatter.title

  useEffect(() => {
    firebase
      .firestore()
      .collection("claps")
      .doc(slug)
      .get()
      .then(res => {
        if (!res.data()) {
          console.log("No matching document")
        } else {
          setClaps(res.data().claps)
        }
      })
      .catch(err => console.log(err))
  }, [])

  const clapHandler = e => {
    e.preventDefault()
    setClaps(claps + 1)
    setNewClaps(newClaps + 1)

    firebase
      .firestore()
      .collection("claps")
      .doc(slug)
      .set({ claps: claps + 1 })
      .catch(err => console.log(err))
  }

  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
      />
      <FeatureImage fluid={featureImage} />
      <Post>
        <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
        <Claps newClaps={newClaps}>
          <button onClick={clapHandler}>👏</button> {claps} claps
        </Claps>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        slug
        title
        excerpt
        featureImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Claps = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8em;
  position: relative;
  button {
    outline: 0;
    background: white;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 1px solid lightgrey;
    font-size: 2em;
    margin-right: 8px;
    cursor: pointer;
  }
  &::before {
    content: '${props => "+" + props.newClaps}';
    background: var(--carbon);
    opacity: 0;
    color: white;
    padding: 8px 12px;
    border-radius: 3px;
    position: absolute;
    z-index: 1;
    top: 3px;
    left: 6px;
    transition: opacity .2s 1s, top .2s 1s;
  }
  &:active::before {
    opacity: 1;
    top: -12px;
    transition: opacity .2s, top .2s;
  }
`
