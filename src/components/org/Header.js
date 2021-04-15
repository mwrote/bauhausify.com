import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SVGInline from 'react-svg-inline'

import logoSvg from '!raw-loader!@src/images/logo-bauhausify.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { VanillaButton } from '@components'

const Container = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (prefers-color-scheme: light) {
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.light};
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.05);
  }

  a[target='_blank']:not(:empty)::after {
    display: none;
  }
`

const Inner = styled.div`
  width: 100%;
  max-width: ${props => props.theme.breaks.xl}px;
  padding: 0 ${props => props.theme.metrics.wideMargin};
  display: flex;
  align-items: center;
`

const BrandWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;

  &:hover {
    color: white;
  }

  @media (prefers-color-scheme: light) {
    color: ${props => props.theme.colors.dark};
    &:hover {
      color: ${props => props.theme.colors.dark};
    }
  }
`

const Brand = styled.span`
  position: relative;
  bottom: 1px;
  text-decoration: none;
  font-size: ${props => props.theme.metrics.wideMargin};
  font-family: ${props => props.theme.typo.brandFont};
  flex-shrink: 0;
`

const SubTitle = styled.span`
  color: ${props => props.theme.colors.semiDark};
  font-family: ${props => props.theme.typo.brandFontJapanese};
  font-size: 0.9rem;
  margin-left: ${props => props.theme.metrics.baseMargin};
  flex: 1 1 auto;

  @media (prefers-color-scheme: light) {
    color: ${props => props.theme.colors.dark};
  }

  br {
    display: none;
  }

  @media (max-width: 440px) {
    font-size: 10px;
    line-height: 1.1em;

    br {
      display: inline;
    }
  }

  @media (max-width: 360px) {
    letter-spacing: -1.5px;
    font-size: 11px;
  }
`

const Tools = styled.div`
  display: flex;
  margin-right: 2px;

  & > * + * {
    margin-left: ${props => props.theme.metrics.baseMargin};
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  @media (prefers-color-scheme: light) {
    &.svg-inline--fa {
      color: ${props => props.theme.colors.dark};
    }
  }
`

const Header = ({ siteTitle, siteSubTitle }) => (
  <Container>
    <Inner>
      <BrandWrapper to="/">
        <Brand>{siteTitle}</Brand>
      </BrandWrapper>
      <SubTitle dangerouslySetInnerHTML={{ __html: siteSubTitle.replace('の', 'の<br>') }} />
      <Tools>
        <a href="https://www.facebook.com/bauhausify/" target="_blank">
          <VanillaButton>
            <StyledFontAwesomeIcon color="#FFFFFF" icon={faFacebookSquare} size="lg" />
          </VanillaButton>
        </a>
        <a href="https://twitter.com/bauhausify" target="_blank">
          <VanillaButton>
            <StyledFontAwesomeIcon color="#FFFFFF" icon={faTwitter} size="lg" />
          </VanillaButton>
        </a>
        <a href="/rss.xml">
          <VanillaButton>
            <StyledFontAwesomeIcon icon={faRss} size="lg" inverse />
          </VanillaButton>
        </a>
      </Tools>
    </Inner>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubTitle: '',
}

export default Header
