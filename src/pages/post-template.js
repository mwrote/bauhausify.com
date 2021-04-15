import React from 'react'
import { graphql, Link } from 'gatsby'
import styled, { css } from 'styled-components'
import SVGInline from 'react-svg-inline'
import Color from 'color'
import { hex } from 'wcag-contrast'
import { getCategoryColor, categories } from '../theme/base'

import {
  Layout,
  Header,
  Footer,
  Sidebar,
  Card,
  SEO,
  PostShare,
  PostBody,
  Toc,
  TocTitle,
  PostList,
  PostListItem,
} from '@components'

import mwroteLogoIcon from '!raw-loader!@src/images/mwrote-logo-icon.svg'

const StyledSidebar = styled(Sidebar)`
  ${tw`mt-0 lg:-mt-6`}
`

const PostHeader = styled.div`
  position: relative;
`

const Badge = styled(Link)`
  position: absolute;
  padding: ${props => props.theme.metrics.baseMargin} 11.5px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: -${props => props.theme.metrics.readablePadding};
  grid-area: badge;
  font-family: ${props => props.theme.typo.brandFont};
  font-size: 10px;
  letter-spacing: -1px;
  background: none;

  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${props => props.theme.effects.baseRadius}px;
  border-bottom-left-radius: ${props => props.theme.effects.baseRadius}px;
  writing-mode: vertical-lr;
  text-orientation: upright;
  -webkit-text-orientation: upright;
  color: rgba(255, 255, 255, ${props => props.theme.colors.baseAlpha});
  z-index: 1;

  &:hover,
  &:active,
  &:visited {
    color: white !important;
  }
`

const Title = styled.h1`
  font-family: ${props => props.theme.typo.brandFontJapanese};
  font-size: 1.5rem;
  position: relative;
  color: ${props => props.theme.colors.light};
  z-index: 0;
  padding-top: ${props => props.theme.metrics.wideMargin};
  padding-bottom: ${props => props.theme.metrics.readablePadding};
  margin: 0;
  ${props => (hex(props.color, '#FFF') < 5 ? 'text-shadow: 0 0 4px rgba(0,0,0,0.3);' : null)}

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: -${props => props.theme.metrics.readablePadding};
    width: calc(100% + ${props => props.theme.metrics.wideReadablePadding});
    height: 100%;

    background-color: ${props => props.color};
  }
`

const Date = styled.div`
  position: absolute;
  bottom: 15px;
  color: rgba(255, 255, 255, ${props => props.theme.colors.baseAlpha});

  ${PostHeader}.design> & {
    color: black;
  }
`

const Thumbnail = styled.div`
  margin-top: ${props => props.theme.metrics.readablePadding};
  display: flex;
  justify-content: center;

  @media (max-width: ${props => props.theme.breaks.lg}px) {
    margin-top: ${props => props.theme.metrics.readablePadding};
  }

  & > img {
    margin: 0;
    max-width: 100%;
  }
`

const Excerpt = styled.div`
  width: calc(100% + ${props => props.theme.metrics.wideReadablePadding});
  position: relative;
  left: -${props => props.theme.metrics.readablePadding};
  padding: ${props => `${props.theme.metrics.wideMargin} ${props.theme.metrics.readablePadding}`};
  color: white;
  background-color: ${props =>
    Color(props.color)
      .darken(0.4)
      .hex()};

  @media (max-width: ${props => props.theme.breaks.lg}px) {
    padding: ${props => `${props.theme.metrics.wideMargin} ${props.theme.metrics.readablePadding}`};
  }
`

const Body = styled(PostBody)`
  ${TocTitle} + & {
    @media (max-width: ${props => props.theme.breaks.lg}px) {
      padding-top: 0;
    }
  }

  padding-top: ${props => props.theme.metrics.readablePadding};

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  & > * {
    white-space: initial;
  }
`

const CardStyled = styled(Card)`
  ${tw`max-w-sm w-full`}
`
const CardStyledToc = styled(CardStyled)`
  ${tw`hidden lg:block`}
`
const CardStyledTitle = styled.h4`
  ${tw`mb-5`}
`
const CardStyledIcon = styled.div`
  ${tw`w-100 h-24 flex justify-center items-center`}
`
const CardStyledDesc = styled.div`
  ${tw`mb-5`}
`

const PostArounds = styled.div`
  display: grid;
  grid-template-areas: 'prev next';
`

const PrevPost = styled(Link)`
  grid-area: prev;
  text-align: left;

  span {
    font-size: ${props => props.theme.typo.smallSize}px;
    opacity: 0.6;
  }

  &:hover {
    color: ${props => props.color};
  }
`

const NextPost = styled(Link)`
  grid-area: next;
  text-align: right;

  span {
    font-size: ${props => props.theme.typo.smallSize}px;
    opacity: 0.6;
  }

  &:hover {
    color: ${props => props.color};
  }
`

const PostWrapper = styled.div`
  ${tw`-mt-3 lg:-mt-6`}
  background-color: ${props => props.theme.colors.light};
  padding: ${props => props.theme.metrics.readablePadding};
  padding-top: 0;
  position: relative;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.05);

  @media (max-width: ${props => props.theme.breaks.lg}px) {
    padding-left: ${props => props.theme.metrics.readablePadding};

  &::before {
  left: 0;
  }
  }

  > ${PostArounds} {
    margin-top: ${props => props.theme.metrics.readablePadding};
  }
  `

const RelatedTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  color: #fbfbfb;
  background-color: #24292e;
  margin: 0;
  margin-bottom: 1px;
`

const Related = styled.div`
  display: flex;
  flex-direction: column;
`

export default class PostTemplate extends React.Component {
  constructor() {
    super()
    this.postBody = React.createRef()
  }
  render() {
    const { data } = this.props

    const { next, prev, relatedPosts } = this.props.pathContext

    const { siteMetadata } = data.site
    const { frontmatter, html, fields, tableOfContents } = data.markdownRemark
    return (
      <Layout
        header={<Header siteTitle={siteMetadata.title} siteSubTitle={siteMetadata.subtitle} />}
        footer={<Footer />}
        sidebar={
          <StyledSidebar>
            <CardStyledToc title="目次">
              <Toc currentCategory={`${frontmatter.category}`} toc={tableOfContents} />
            </CardStyledToc>
            <CardStyled variant="external">
              <CardStyledTitle>エムロート [Mwrote]</CardStyledTitle>
              <CardStyledIcon>
                <SVGInline svg={mwroteLogoIcon} />
              </CardStyledIcon>
              <CardStyledDesc
                dangerouslySetInnerHTML={{ __html: siteMetadata.descriptionMyself }}
              />
            </CardStyled>
          </StyledSidebar>
        }
      >
        <SEO title={frontmatter.title} description={frontmatter.excerpt} />
        <PostWrapper>
          <PostHeader>
            <Badge to={`/${frontmatter.category.toLowerCase()}/`}>
              {frontmatter.category.toUpperCase()}
            </Badge>
            <Title color={getCategoryColor(frontmatter.category)}>{frontmatter.title}</Title>
            <Date>{frontmatter.date}</Date>
          </PostHeader>
          {frontmatter.excerpt ? (
            <Excerpt
              color={getCategoryColor(frontmatter.category)}
              dangerouslySetInnerHTML={{ __html: frontmatter.excerpt }}
            />
          ) : null}
          {frontmatter.cover.length > 0 && (
            <Thumbnail>
              <img alt="" src={frontmatter.cover} />
            </Thumbnail>
          )}
          <Body category={frontmatter.category} dangerouslySetInnerHTML={{ __html: html }} />
          <PostShare
            frontmatter={frontmatter}
            postPath={fields.slug}
            siteUrl={siteMetadata.siteUrl}
            style={tw`mt-8`}
          />
          <PostArounds>
            {next ? (
              <PrevPost to={next.path} color={getCategoryColor(next.category)}>
                前の記事
                <br />
                <span>{next.title}</span>
              </PrevPost>
            ) : null}
            {prev ? (
              <NextPost to={prev.path} color={getCategoryColor(prev.category)}>
                次の記事
                <br />
                <span>{prev.title}</span>
              </NextPost>
            ) : null}
          </PostArounds>
        </PostWrapper>
        {relatedPosts && relatedPosts.length > 0 && (
          <Related style={tw`mt-6`}>
            <RelatedTitle>関連記事</RelatedTitle>
            <PostList>
              {relatedPosts.map(post => {
                return (
                  <PostListItem
                    key={post.id}
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    slug={post.fields.slug}
                    category={post.frontmatter.category}
                    excerpt={post.frontmatter.excerpt}
                  />
                )
              })}
            </PostList>
          </Related>
        )}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByID($id: String) {
    site {
      siteMetadata {
        title
        siteUrl
        subtitle
        descriptionMyself
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      tableOfContents
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        cover
        category
        excerpt
      }
    }
  }
`
