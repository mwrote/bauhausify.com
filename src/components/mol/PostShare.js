import React from 'react'
import { FacebookShareButton, TwitterShareButton, FacebookShareCount } from 'react-share'
import styled from 'styled-components'
import urljoin from 'url-join'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { VanillaButton } from '@components'

const TitleArea = styled.div``

const Title = styled.h2`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  top: -1px;
  left: -1px;
  padding: 4px 8px;
  color: #fbfbfb;
  background-color: #24292e;
  margin: 0;

  @media (max-width: ${props => props.theme.breaks.lg}px) {
    font-size: 12px;
  }
`

const Count = styled.div``

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;

  > * {
    margin-left: ${props => props.theme.metrics.wideMargin};
  }
  > *:first-child {
    margin-left: 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid #efefef;
  padding: ${props => props.theme.metrics.readablePadding};

  @media (max-width: ${props => props.theme.breaks.lg}px) {
    padding-top: calc(${props => props.theme.metrics.readablePadding + ' + 1rem'});
  }

  & > ${TitleArea} {
    margin-bottom: ${props => props.theme.metrics.wideMargin};
  }
`

const PostShare = ({ frontmatter, postPath, siteUrl, className, style }) => {
  const post = frontmatter
  const url = urljoin(siteUrl, encodeURI(postPath))
  const filter = count => (count > 0 ? count : '')
  const renderShareCount = count => <Count>{filter(count)}</Count>
  return (
    <Wrapper className={className} style={style}>
      <Title>この記事を共有しよう！</Title>
      <ButtonArea>
        <FacebookShareButton url={url} quote={post.title}>
          <VanillaButton>
            <FontAwesomeIcon color="#3B5998" icon={faFacebookSquare} size="3x" />
          </VanillaButton>
          <FacebookShareCount url={url}>{count => renderShareCount(count)}</FacebookShareCount>
        </FacebookShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <VanillaButton>
            <FontAwesomeIcon color="#0084b4" icon={faTwitter} size="3x" />
          </VanillaButton>
        </TwitterShareButton>
      </ButtonArea>
    </Wrapper>
  )
}

export default PostShare
