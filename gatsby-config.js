module.exports = {
  pathPrefix: "/GithubAndGitGuide",
  siteMetadata: {
    siteTitle: `@Github&Git`,
    defaultTitle: `Documentation for Github & Git`,
    siteTitleShort: `Git-Github-docs`,
    siteDescription: `Github and User Manual`,
    siteUrl: `https://github.dxc.com/Platform-DXC/GithubAndGitGuide`,
    siteAuthor: `@melfelah`,
    siteImage: `/dxc.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Created with love by the Github Team ❤️ `,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.dxc.com/Platform-DXC/GithubAndGitGuide`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Github Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl:`https://github.dxc.com/Platform-DXC/GithubAndGitGuide` ,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
