module.exports = {
  siteMetadata: {
    title: `CodeMyMobile | Crafting Apps Intelligently`,
    name: `CodeMyMobile Inc`,
    siteUrl: `https://blog.codemymobile.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `CodeMyMobile - Creating Products that are loved by millions.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/codemymobile`
      },
      {
        name: `github`,
        url: `https://github.com/codemymobile`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/codemymobile`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/codemymobile/`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CodeMyMobile Blog`,
        short_name: `CodeMyMobile`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/codemymobile.svg`
      }
    }
  ]
};
