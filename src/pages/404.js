import React from 'react'
import { Link } from 'gatsby'

import { Layout, SEO } from '@components'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: ページが見つかりません。" />
    <h1>ページが見つかりません。</h1>
    <p>
      お探しのページが見つかりませんでした。<Link to="/">トップへ戻る</Link>
    </p>
  </Layout>
)

export default NotFoundPage
