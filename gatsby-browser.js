/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import parse from 'url-parse'
import UAParser from 'ua-parser-js'
import 'sanitize.css'
import 'prism-themes/themes/prism-ghcolors.css'
import supportedBrowsersRegExp from '@src/utils/dist/supportedBrowsersRegExp'
import supportedBrowsersList from '@src/utils/dist/supportedBrowsersList'

if (
  process.env.NODE_ENV === 'production' &&
  !supportedBrowsersRegExp.test(navigator.userAgent) &&
  window.location.pathname.indexOf('/not-supported') !== 0
) {
  const url = parse(window.location.href, true)
  const redirectPath =
    url.query && url.query.redirectPath ? url.query.redirectPath : window.location.pathname

  const uaParser = new UAParser()
  const browserName = uaParser.getBrowser()
  console.log(browserName)
  if (browserName.name === 'IE') {
    window.location = `/not-supported?redirectPath=${redirectPath}`
  }
}
