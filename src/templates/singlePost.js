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
          <button onClick={clapHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 38h38V0H0v38z" />
                </clipPath>
              </defs>
              <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                <path
                  d="M2.727 14.701s-1.394 1.291-.103 2.686c1.29 1.393 2.686.101 2.686.101l6.47-5.994c-.101.096.45.88.369.955l-8.982 8.32s-1.394 1.29-.103 2.683c1.292 1.395 2.686.103 2.686.103l8.448-7.825c-.02.018.609.731.597.742L5 25.544s-1.394 1.291-.103 2.685c1.292 1.393 2.686.102 2.686.102l9.793-9.072c.012-.01.683.664.703.645l-9.154 8.48s-1.394 1.29-.103 2.684c1.292 1.393 2.686.102 2.686.102l9.679-8.965c2.866-2.655 3.512-1.958 3.512-1.958l-2.588 2.397-2.99 2.767s-1.393 1.291-.101 2.686c1.292 1.394 2.685.103 2.685.103l7.667-7.102c4.618-4.278 4.895-11.49.616-16.11C25.71.37 18.497.094 13.878 4.371c-.244.226-.682.663-.663.684l-.033-.038-10.455 9.684z"
                  fill="#c1694f"
                />
                <path
                  d="M5.627 16.65s-1.394 1.291-.103 2.685c1.291 1.395 2.685.104 2.685.104l6.472-5.996c-.103.096.45.88.368.955l-8.982 8.32s-1.394 1.29-.103 2.684c1.291 1.394 2.685.103 2.685.103l8.448-7.826c-.019.02.61.731.598.742l-9.794 9.073s-1.394 1.29-.103 2.684c1.291 1.394 2.685.103 2.685.103l9.793-9.07c.013-.013.683.661.703.643l-9.153 8.48s-1.394 1.29-.103 2.683c1.291 1.394 2.685.103 2.685.103l9.68-8.966c2.865-2.654 3.512-1.957 3.512-1.957l-2.589 2.397-2.988 2.767s-1.393 1.291-.103 2.685c1.292 1.394 2.686.103 2.686.103l7.666-7.1c4.619-4.279 4.895-11.493.617-16.11-4.279-4.62-11.492-4.895-16.111-.617-.245.225-.682.662-.663.682l-.034-.038L5.627 16.65z"
                  fill="#d99e82"
                />
                <path
                  d="M25.541 30.541a1 1 0 00-.79 1.611l2.978 3.855a.999.999 0 101.583-1.222l-2.979-3.855a.996.996 0 00-.792-.389M20 30a1 1 0 00-1 1v5a1 1 0 002 0v-5a1 1 0 00-1-1M29.417 27.333a.999.999 0 00-.939.659.999.999 0 00.597 1.281l4.583 1.667a1 1 0 00.684-1.88l-4.583-1.666a1.004 1.004 0 00-.342-.061"
                  fill="#ffac33"
                />
              </g>
            </svg>
          </button>{" "}
          {claps} claps
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
  font-size: 1em;
  position: relative;
  button {
    outline: 0;
    background: white;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    border: 1px solid lightgrey;
    font-size: 2em;
    margin-right: 8px;
    padding: 10px;
    cursor: pointer;
  }
  &::before {
    content: '${props => "+" + props.newClaps}';
    background: var(--carbon);
    opacity: 0;
    color: salmon;
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
