const urljoin = require('url-join')

const base = require('./src/theme/base').base

const siteUrl = 'https://www.bauhausify.com'

module.exports = {
  siteMetadata: {
    title: 'bauhausify',
    subtitle: '美大出身のWEBエンジニアリング奮闘記',
    // descriptionは90文字以内で
    description: `バウシィファイ(bauhausify)は、Webサイト・アプリケーション制作におけるデザインと技術の情報発信ブログです。`,
    descriptionMyself: `
多摩美術大学<br>プロダクトデザイン専攻卒業 -> <br>GUIデザイン会社勤務 -><br>
現在フロントエンジニア<br>
<br>
My site -><br>
<a href="http://www.mwrote.com">www.mwrote.com</a>
`,
    author: `@mwrote`,
    siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Baumans', 'M PLUS 1p'],
        display: 'swap',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'gatsby-remark-code-titles',
            },
          },
          // insert below
          {
            resolve: 'gatsby-remark-codepen',
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: false,
              providers: {
                include: ['Twitter', 'SoundCloud', 'CodeSandbox', 'Vimeo', 'YouTube'],
                settings: {},
              },
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon',
              size: 64,
            },
          },
          // insert above
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: '-60',
              className: 'gatsby-remark-autolink-headers-icon',
              icon: `<svg width="22px" height="7px" viewBox="0 0 22 7" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon-link" fill="#23282D">
            <path d="M14,1 C13.4477153,1 13,1.31979661 13,1.71428571 L13,5.28571429 C13,5.68020339 13.4477153,6 14,6 L20,6 C20.5522847,6 21,5.68020339 21,5.28571429 L21,1.71428571 C21,1.31979661 20.5522847,1 20,1 L14,1 Z M14,0 L20,0 C21.1045695,0 22,0.696445945 22,1.55555556 L22,5.44444444 C22,6.30355406 21.1045695,7 20,7 L14,7 C12.8954305,7 12,6.30355406 12,5.44444444 L12,1.55555556 C12,0.696445945 12.8954305,0 14,0 Z M12,2 L12,5 L13,5 L13,2 L12,2 Z" id="Combined-Shape" fill-rule="nonzero"></path>
            <path d="M2,1 C1.44771525,1 1,1.31979661 1,1.71428571 L1,5.28571429 C1,5.68020339 1.44771525,6 2,6 L8,6 C8.55228475,6 9,5.68020339 9,5.28571429 L9,1.71428571 C9,1.31979661 8.55228475,1 8,1 L2,1 Z M2,0 L8,0 C9.1045695,0 10,0.696445945 10,1.55555556 L10,5.44444444 C10,6.30355406 9.1045695,7 8,7 L2,7 C0.8954305,7 0,6.30355406 0,5.44444444 L0,1.55555556 C0,0.696445945 0.8954305,0 2,0 Z M9,2 L9,5 L10,5 L10,2 L9,2 Z" id="Combined-Shape" fill-rule="nonzero"></path>
            <rect id="Rectangle-2" x="6" y="3" width="10" height="1"></rect>
        </g>
    </g>
</svg>`,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMaker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: 'bauhausify',
        start_url: `/`,
        background_color: base.colors.dark,
        theme_color: base.colors.dark,
        display: `minimal-ui`,
        icon: `src/images/logo-bauhausify.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'bauhausify RSS',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/post-template', '/not-supported'],
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: urljoin(site.siteMetadata.siteUrl, encodeURI(edge.node.path)),
              changefreq: 'daily',
              priority: 0.7,
            }
          }),
      },
    },
    'gatsby-plugin-robots-txt',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
