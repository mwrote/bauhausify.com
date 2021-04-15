/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const browserslist = require('browserslist')
const { getUserAgentRegExp } = require('browserslist-useragent-regexp')
const fs = require('fs')
const related = require('./plugins/related')

// create suportedBrowsers js
const supportedBrowserRegExp = getUserAgentRegExp({
  allowHigherVersions: true,
})
fs.writeFileSync(
  path.resolve(__dirname, './src/utils/dist/supportedBrowsersRegExp.js'),
  `module.exports = ${supportedBrowserRegExp};`
)
fs.writeFileSync(
  path.resolve(__dirname, './src/utils/dist/supportedBrowsersList.js'),
  `module.exports = ${JSON.stringify(browserslist())}`
)

// Webpack config
exports.onCreateWebpackConfig = ({ actions, getConfig, loaders }) => {
  const config = getConfig()

  // add es6 plugin to babel-loader
  config.module.rules = [
    ...config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/)),
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: modulePath =>
        /node_modules/.test(modulePath) &&
        !/node_modules\/@raae\/gatsby-remark-oembed/.test(modulePath),
    },
  ]

  config.resolve.alias = {
    ...config.resolve.alias,
    '@components': path.resolve(__dirname, 'src/components'),
    '@src': path.resolve(__dirname, 'src'),
  }

  actions.replaceWebpackConfig(config)
}

// create slug to node fields by mardkdown filepath
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

// create pages, post, category ...etc
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              excerpt
              templateKey
              category
              propertags
              commontags
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
              category
            }
          }
          prev: previous {
            fields {
              slug
            }
            frontmatter {
              title
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    // create post page
    posts.forEach(({ node, next, prev }) => {
      const relatedPosts = related.get(posts, node).slice(0, 5)

      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/pages/${String(node.frontmatter.templateKey)}-template.js`),
        // additional data can be passed to component via context
        context: {
          id: node.id,
          next: next
            ? {
                path: next.fields.slug,
                title: next.frontmatter.title,
                category: next.frontmatter.category,
              }
            : null,
          prev: prev
            ? {
                path: prev.fields.slug,
                title: prev.frontmatter.title,
                category: prev.frontmatter.category,
              }
            : null,
          relatedPosts,
        },
      })
    })

    // create category page
    const categories = []
    posts.forEach(({ node }) => {
      if (categories.indexOf(node.frontmatter.category) === -1) {
        categories.push(node.frontmatter.category)
      }
    })

    categories.forEach(category => {
      createPage({
        path: `/${category.toLowerCase()}/`,
        component: path.resolve('src/pages/index.js'),
        context: {
          category,
        },
      })
    })
  })
}
