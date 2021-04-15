import React from 'react'
import { Link } from 'gatsby'
import SVGInline from 'react-svg-inline'
import styled from 'styled-components'

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
  Badge,
  RefSection,
} from '@components'

import mwroteLogoIcon from '!raw-loader!@src/images/mwrote-logo-icon.svg'

const CardStyled = styled(Card)`
  ${tw`max-w-sm mt-3`}
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

const SidebarDefault = ({ description, descriptionMyself }) => (
  <>
    <CardStyled variant="definition" title="Definition">
      <h4>
        バウハウシィファイ
        <br />
        [bauhausify]
      </h4>
      <p>{description}</p>
      <Link to="/2019-07-01_このブログについて/">詳しく見る</Link>
    </CardStyled>
    <CardStyled variant="external">
      <CardStyledTitle>エムロート [Mwrote]</CardStyledTitle>
      <CardStyledIcon>
        <SVGInline svg={mwroteLogoIcon} />
      </CardStyledIcon>
      <CardStyledDesc dangerouslySetInnerHTML={{ __html: descriptionMyself }} />
    </CardStyled>
  </>
)

export default SidebarDefault
