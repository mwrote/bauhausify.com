import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import dayjs from 'dayjs'
import Color from 'color'
import { getCategoryColor } from '@src/theme/base'

import { Date } from '@components'

const Wrapper = styled.li`
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-areas: 'badge content';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;

  background: ${props => props.theme.colors.light};
  box-shadow: 0px 1px 0px ${props => props.theme.effects.defaultDrop};
  border-radius: ${props => props.theme.effects.baseRadius}px;
`

const Badge = styled(Link)`
  padding: ${props => props.theme.metrics.baseMargin} 11.5px;
  grid-area: badge;
  font-family: ${props => props.theme.typo.brandFont};
  font-size: 10px;
  white-space: nowrap;
  height: 100%;
  letter-spacing: -1px;
  background-color: ${props => props.theme.colors[props.category]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${props => props.theme.effects.baseRadius}px;
  border-bottom-left-radius: ${props => props.theme.effects.baseRadius}px;
  writing-mode: vertical-lr;
  text-orientation: upright;
  -webkit-text-orientation: upright;
  color: rgba(255, 255, 255, ${props => props.theme.colors.baseAlpha});

  &:hover,
  &:active,
  &:visited {
    color: white !important;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'excerpt'
    'date';
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: calc(${props => props.theme.metrics.baseMargin} / 2);
`

const Title = styled(Link)`
  padding-top: ${props => props.theme.metrics.baseMargin};
  padding-bottom: calc(${props => props.theme.metrics.baseMargin} / 2);
  grid-area: title;
  font-family: ${props => props.theme.typo.brandFontJapanese};
  padding-left: ${props => props.theme.metrics.wideMargin};
  padding-right: ${props => props.theme.metrics.wideMargin};
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
  text-decoration: none;
  position: relative;
  z-index: 1;

  &:hover,
  &:active {
    color: white !important;

    &::after {
      background-color: ${props => getCategoryColor(props.category)};
    }
  }

  &::after {
    left: 0;
    top: 0;
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: background-color 0.2s;
  }
`

const DateStyled = styled(Date)`
  font-size: 1rem;
  line-height: 1rem;
  grid-area: date;
  margin-right: auto;
  padding-left: ${props => props.theme.metrics.wideMargin};
  padding-bottom: calc(${props => props.theme.metrics.baseMargin} / 2);
  line-height: 1.4em;
  color: ${props =>
    Color(props.theme.colors.dark)
      .lighten(2)
      .hex()};
`

const Excerpt = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  grid-area: excerpt;
  padding-left: ${props => props.theme.metrics.wideMargin};
  padding-right: ${props => props.theme.metrics.baseMargin};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props =>
    Color(props.theme.colors.dark)
      .lighten(2)
      .hex()};
`

const PostListItem = ({ date, slug, title, category, excerpt, className }) => {
  return (
    <Wrapper className={className}>
      <Badge to={`/${category.toLowerCase()}/`} category={category.toLowerCase()}>
        {category.toUpperCase()}
      </Badge>
      <Content>
        <Title category={category} to={slug}>
          {title}
        </Title>
        <DateStyled date={date} />
        <Excerpt>{excerpt}</Excerpt>
      </Content>
    </Wrapper>
  )
}

export default styled(PostListItem)``
