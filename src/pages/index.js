import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import SVGInline from 'react-svg-inline'

import {
  Layout,
  Image,
  SEO,
  PostList,
  PostListItem,
  Header,
  Footer,
  Sidebar,
  Card,
  RefSection,
  TitleCard,
} from '@components'

import mwroteLogoIcon from '!raw-loader!@src/images/mwrote-logo-icon.svg'

import SidebarDefault from '@src/pages/shared/SidebarDefault'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    site: { siteMetadata },
  },
}) => {
  return (
    <Layout
      header={<Header siteTitle={siteMetadata.title} siteSubTitle={siteMetadata.subtitle} />}
      footer={<Footer />}
      sidebar={
        <Sidebar>
          <SidebarDefault
            description={siteMetadata.description}
            descriptionMyself={siteMetadata.descriptionMyself}
          />
        </Sidebar>
      }
      titleArea={<TitleCard siteTitle={siteMetadata.title} subTitle={siteMetadata.subtitle} />}
    >
      <SEO
        isTop
        title={`${siteMetadata.title} | ${siteMetadata.subtitle}`}
        description={siteMetadata.description}
      />
      <PostList>
        {edges.map(edge => {
          const { date, title, category, excerpt } = edge.node.frontmatter
          const slug = edge.node.fields.slug
          return (
            <PostListItem
              key={edge.node.id}
              title={title}
              date={date}
              slug={slug}
              category={category}
              excerpt={excerpt}
            />
          )
        })}
      </PostList>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
        subtitle
        description
        descriptionMyself
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            category
            excerpt
          }
        }
      }
    }
  }
`
