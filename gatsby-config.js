module.exports = {
  siteMetadata: {
    title: `P. Ch. Productions`,
    description: `Peter is a photographer who shoots cars and music videos while making music himself.`,
    author: `Nik Gospodinov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: '',
        sitemap: '',
        policy: [{ userAgent: '*', allow: '/' }]
      }
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-small.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_LINK || 'http://localhost:1337',
        queryLimit: 1000,
        contentTypes: [
          'photo',
          'video',
          'song'
        ],
        singleTypes: [
          'about',
          'home',
          'contact',
          'photography',
          'videos-page',
          'music-page'
        ]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
