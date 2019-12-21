module.exports = {
  siteMetadata: {
    title: `CodeMyMobile | Crafting Apps Intelligently`,
    name: `CodeMyMobile Inc`,
    siteUrl: `https://blog.codemymobile.com`,
    description: `Hire the best remote development team. A team of experienced developers for Android, iOS, React Native, Augmented/Virtual Reality, Docker, Kubernetes, Blockchain and more.`,
    hero: {
      heading: `CodeMyMobile - Your Partners in Technology.`,
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
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-feed-generator`,
      options: {
        generator: `GatsbyJS`,
        json: true,
        rss: false,
        siteQuery: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            name: 'featured',
            query: `
              {
                allArticle(limit: 1, sort: {fields: [date], order: DESC}) {
                  nodes {
                    title
                    excerpt
                    date
                    author
                    slug
                  }
                }
              }
            `,
            normalize: ({ query: { site, allArticle } }) => {
              return allArticle.nodes.map(node => {
                return {
                  url: `${site.siteMetadata.siteUrl}${node.slug}`,
                  title: node.title,
                  date: node.date,
                  excerpt: node.excerpt,
                  author: { name: node.author }
                };
              });
            }
          }
        ]
      }
    }
  ]
};
