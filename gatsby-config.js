module.exports = {
  siteMetadata: {
    title: "My MDX Blog",
    description: "I coded this entire website in  12 hours",
    url: "TheNomanAhmed.com",
    twitterUsername: "@TheNomanAhmed",
    author: "Noman Ahmed Khan",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `Muli\:400,400i,700,700i`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-page-progress`,
      options: {
        includePaths: [],
        excludePaths: ["/"],
        color: `#E4A713`,
        height: 5,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY || "none",
          databaseURL: process.env.FIREBASE_DATABASE_URL || "none",
          projectId: process.env.FIREBASE_PROJECT_ID || "none",
          appId: process.env.FIREBASE_APPID || "none",
        },
      },
    },
  ],
}
