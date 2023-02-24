module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Fruehtrunk Dach, Dachdecker im 5. Bezirk / Margareten, Wien`,
    description: `Frühtrunk-Dach ist Ihr Partner, wenn es um das Dach geht. Dachdeckermeister und Spengler Jan Frühtrunk zeichnet sich mit über 15 Jahren Berufserfahrung in England, Deutschland und Österreich aus. Ob Einfamilienhaus, Villa, Zinshaus oder Kirche - Frühtrunk Dach bringt die nötige Erfahrung mit.`,
    author: `Jan Frühtrunk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
  ],
}

