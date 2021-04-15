import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { base } from '@src/theme/base'

import GlobalCss from '@src/theme/global'

const GlobalStyle = createGlobalStyle`
  ${GlobalCss}
`

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  display: grid;

  grid-template-areas:
    'header header header header'
    '. title title .'
    '. contents sidebar .'
    '. footer sidebar .';
  gap: ${props => props.theme.metrics.wideMargin};
  grid-template-rows: ${props => props.theme.metrics.headerHeight}px;
  grid-template-columns:
    0
    calc(
      100% -
        calc(
          ${props => props.theme.metrics.sidebarWidth}px +
            calc(${props => props.theme.metrics.baseMargin} * 6)
        )
    )
    ${props => props.theme.metrics.sidebarWidth}px
    0;
  height: 100%;

  @media (max-width: ${props => props.theme.breaks.lg}px) {
    gap: ${props => props.theme.metrics.baseMargin};
    height: inherit;
    grid-template-areas:
      'header'
      'title'
      'contents'
      'sidebar'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: ${props => props.theme.metrics.headerHeight}px auto auto 1fr;
  }

  @media (min-width: ${props => props.theme.breaks.xl}px) {
    grid-template-columns:
      auto
      calc(
        ${props => props.theme.breaks.xl}px -
          calc(
            ${props => props.theme.metrics.sidebarWidth}px +
              calc(${props => props.theme.metrics.baseMargin} * 6)
          )
      )
      ${props => props.theme.metrics.sidebarWidth}px
      auto;
  }
`

const Header = styled.div`
  grid-area: header;
`

const TitleArea = styled.div`
  grid-area: title;
  @media (max-width: ${props => props.theme.breaks.lg}px) {
    padding: 0 ${props => props.theme.metrics.baseMargin};
  }
`

const Contents = styled.div`
  grid-area: contents;

  > * {
    max-width: calc(100vw - ${props => props.theme.metrics.wideMargin});
  }

  @media (max-width: ${props => props.theme.breaks.lg}px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${props => props.theme.metrics.baseMargin};
  }
`

const Sidebar = styled.div`
  grid-area: sidebar;
  padding: 0 ${props => props.theme.metrics.baseMargin};

  @media (min-width: ${props => props.theme.breaks.lg}px) {
    padding: 0;
    height: 100%;
  }
`

const Footer = styled.div`
  grid-area: footer;
  padding: ${props => props.theme.metrics.baseMargin};
  margin-bottom: ${props => props.theme.metrics.wideMargin};
`

const Layout = ({ children, header, footer, sidebar, titleArea }) => {
  return (
    <ThemeProvider theme={base}>
      <Wrapper>
        <GlobalStyle />
        <Header>{header}</Header>
        <TitleArea>{titleArea}</TitleArea>
        <Contents>{children}</Contents>
        <Sidebar>{sidebar}</Sidebar>
        <Footer>{footer}</Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
