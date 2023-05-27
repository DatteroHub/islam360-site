/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Islam360 Italia per dawah e mentoring`,
    description: `Scopri l'Islam, incontra i Musulmani, e unisciti alla Dawah`,
    image: `/logo.png`,
    siteUrl: `https://www.islam360.it`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-anchor-links',
  ],
}
