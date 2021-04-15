import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { base, getCategoryColor } from '@src/theme/base'

const tocActiveClass = 'is-active'

const TocWrapper = styled.div`
  ul {
    list-style: none;

    li:not(:first-child) {
      margin-top: 0.5em;
    }

    p {
      margin: 0;
    }

    p + ul {
      margin-top: 0.5em;
    }

    a {
      color: ${props => props.theme.colors.semiDark};

      &:hover {
        color: ${props => props.categoryColor} !important;
      }
      &.${tocActiveClass} {
        color: ${props => props.categoryColor} !important;
      }
    }
  }

  > ul {
    padding-left: 0;
    list-style: none;

    &:first-child {
      padding-left: 0;
      margin: 0;
    }
  }
`

class Toc extends React.Component {
  scrollTimer = null
  constructor(props) {
    super()
    this.state = {
      toc: props.toc,
      currentCategory: props.currentCategory,
      heads: [],
      tocHeads: [],
    }
    this.wrapper = React.createRef()
  }
  componentDidMount() {
    const ids = this.state.toc.match(new RegExp('/#[^">]*', 'g'))
    const heads = ids.map(id => {
      return document.querySelector(`#${decodeURI(id.replace('/#', ''))}`)
    })
    this.setState({
      heads,
      tocHeads: this.wrapper.current.querySelectorAll('a'),
    })
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
  onScroll = () => {
    clearTimeout(this.scrollTimer)
    this.scrollTimer = setTimeout(() => {
      this.highLightToc()
    }, 50)
  }
  highLightToc = () => {
    const { heads, tocHeads } = this.state
    const currentHead = heads.find((head, i) => {
      if (head.getBoundingClientRect().top > 0) {
        if (heads[i - 1]) {
          return heads[i - 1]
        } else {
          return head
        }
      }
    })
    if (!currentHead) {
      tocHeads.forEach(tocHead => {
        tocHead.classList.remove(tocActiveClass)
      })
      return
    }

    tocHeads.forEach(tocHead => {
      tocHead.classList.remove(tocActiveClass)
      const tocHeadId = tocHead.href.match(new RegExp('/#[^">]*', 'g'))[0].replace('/#', '')

      // if child ul, active parent ul a
      if (decodeURI(tocHeadId) === currentHead.id) {
        tocHead.classList.add(tocActiveClass)
        if (
          tocHead.parentNode.parentNode.tagName === 'UL' &&
          tocHead.parentNode.parentNode !== this.wrapper.current.querySelector('ul')
        ) {
          tocHead.parentNode.parentNode.parentNode.querySelector('a').classList.add(tocActiveClass)
        }
      }
    })
  }
  render() {
    return (
      <>
        <TocWrapper
          ref={this.wrapper}
          show={this.state.show}
          className={this.props.className}
          categoryColor={getCategoryColor(this.state.currentCategory)}
          dangerouslySetInnerHTML={{ __html: this.state.toc }}
        />
      </>
    )
  }
}

export default Toc
