exports.createPages = async ({ graphwl, actions }) => {
  const { data } = await graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `

  // Create paginated posts

  const postPerPage = 3
  const numPages = Math.ceil(data.AllMdx.edges.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPages({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/template/allPost.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  //create single page

  data.AllMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPages({
      path: slug,
      component: require.resolve(`./src/template/singlePost.js`),
      context: { id },
    })
  })
}
