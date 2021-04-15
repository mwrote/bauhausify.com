import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import SVGInline from 'react-svg-inline'
import styled from 'styled-components'
import UAParser from 'ua-parser-js'
import parse from 'url-parse'
import { globalHistory } from '@reach/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdge, faSafari, faChrome, faFirefox } from '@fortawesome/free-brands-svg-icons'

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

const BrowserList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`

const ListItem = styled.li`
  ${tw`mr-4`}
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
  ${tw`mr-1`}
`

const Download = styled.a``

const NotSupported = () => {
  const parser = new UAParser()
  const currentOS = parser.getOS().name
  const currentVersion = Number(parser.getOS().version)
  const os = {
    android: 'Android',
    ios: 'iOS',
    mac: 'Mac OS',
    win: 'Windows',
  }
  let browserList

  const url = parse(globalHistory.location.href, true)
  const havRedirectPath = url.query && url.query.redirectPath
  const redirectUrl = havRedirectPath
    ? `https://www.bauhausify.com${url.query.redirectPath}`
    : 'https://www.bauhausify.com'

  switch (currentOS) {
    case os.android:
      browserList = (
        <>
          <ListItem>
            <StyledIcon icon={faChrome} size="lg" />
            Chrome
            {/* {(havRedirectPath) ? (<Download href={`googlechrome:${redirectUrl}`}>Chromeで開く</Download>) : null} */}
          </ListItem>
        </>
      )
      break
    case os.ios:
      browserList = (
        <>
          <ListItem>
            <StyledIcon icon={faChrome} size="lg" />
            Chrome
            {/* {(havRedirectPath) ? (<Download href={`googlechrome:${redirectUrl}`}>Chromeで開く</Download>) : null} */}
          </ListItem>
          <ListItem>
            <StyledIcon icon={faSafari} size="lg" />
            Safari
            {/* {(havRedirectPath) ? (<Download href={`x-web-search:${redirectUrl}`}>Safariで開く</Download>) : null} */}
          </ListItem>
        </>
      )
      break
    case os.mac:
      browserList = (
        <>
          <ListItem>
            <StyledIcon icon={faChrome} size="lg" />
            Chrome
            {/* {(havRedirectPath) ? (<Download href={`googlechrome:${redirectUrl}`}>Chromeで開く</Download>) : null} */}
          </ListItem>
          <ListItem>
            <StyledIcon icon={faSafari} size="lg" />
            Safari
          </ListItem>
          <ListItem>
            <StyledIcon icon={faFirefox} size="lg" />
            Firefox
            {/* {(havRedirectPath) ? (<Download href={`firefox:${redirectUrl}`}>Firefoxで開く</Download>) : null} */}
          </ListItem>
        </>
      )
      break
    case os.win:
      browserList = (
        <>
          <ListItem>
            <StyledIcon icon={faEdge} size="lg" />
            Edge
            {havRedirectPath && currentVersion >= 10 ? (
              <Download href={`microsoft-edge:${redirectUrl}`}>Edgeで開く</Download>
            ) : null}
          </ListItem>
        </>
      )
      break
  }
  return (
    <Layout>
      <SEO title="ブラウザがサポートされていません。" />
      <h1>ブラウザがサポートされておりません。</h1>
      <p>
        このサイトでは、お使いのブラウザがサポートされておりません。
        <br />
        以下のブラウザーでの閲覧を推奨しております。
      </p>
      <BrowserList>{browserList}</BrowserList>
    </Layout>
  )
}

export default NotSupported
