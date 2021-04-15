import React from 'react'
import styled from 'styled-components'

import { PostListItem } from '@components'

const Wrapper = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;

  > ${PostListItem} + ${PostListItem} {
  margin-top: ${props => props.theme.metrics.tinyMargin}px;
  }

  > ${PostListItem} {
    min-height: height: ${props => props.theme.metrics.wideReadablePadding};
  }
`

const PostList = ({ children }) => <Wrapper>{children}</Wrapper>

export default PostList
