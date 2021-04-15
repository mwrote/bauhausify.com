import React from 'react'
import styled from 'styled-components'
import Color from 'color'
import { getCategoryColor } from '@src/theme/base'

const Wrapper = styled.div`
  h1, h2 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    position: relative;

    &:focus {
      outline: none;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: ${props => props.theme.colors.strongLight};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    position: relative;
    text-indent: -4px;
    outline: none;
  }

  /* inline code */
  *:not(pre) > code {
    font-size: .85em;
    margin: 0 .2em;
    padding: .2em .4em;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    position: relative;
    top: -1px;
    white-space: pre-line;
  }

  img,
  iframe {
    max-width: 100%;
  }

  // for toc
  h1::before, h2::before, h3::before, h4::before, h5::before, h6::before {
    display: block;
    content: " ";
    height: 20px;
    margin-top: -20px;
    visibility: hidden;
  }

  > p > iframe {
    width: 100%;
  }

  a {
    color: ${({ category }) => getCategoryColor(category)};
  }
`

const PostBody = ({ className, ...args }) => <Wrapper className={className} {...args} />

export default PostBody
