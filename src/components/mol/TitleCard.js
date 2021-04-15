import React from 'react'
import styled from 'styled-components'

const Brand = styled.span`
  color: black;
  font-size: 34px;
  font-family: ${props => props.theme.typo.brandFont};
  margin-left: ${props => props.theme.metrics.baseMargin};
  flex-shrink: 0;
  position: relative;
`

const Translate = styled.span`
  font-size: ${props => props.theme.metrics.baseMargin};
  font-family: ${props => props.theme.typo.brandFontJapanese};
  position: absolute;
  font-weight: bold;
  top: 31px;
  left: 3px;
  letter-spacing: -0.5px;
`

const SubTitle = styled.span`
  position: absolute;
  font-family: ${props => props.theme.typo.brandFontJapanese};
  left: 41px;
  bottom: 25px;
  font-size: 15px;
`

const BGText = styled.div`
  font-size: 84px;
  font-family: ${props => props.theme.typo.brandFont};
  line-height: 70px;
  color: white;
  position: absolute;
  top: ${props => props.theme.metrics.wideMargin};
  right: 21px;
  text-align: right;

  > span {
    position: relative;
    top: -${props => props.theme.metrics.baseMargin};
    display: block;
  }
`

const Wrapper = styled.ul`
  width: 100%;
  height: 250px;
  padding: 19px 28px;
  margin: 0;
  background-color: #f9f9f9;
  position: relative;

  @media (max-width: 700px) {
    height: 145px;

    > ${BGText} {
      display: none;
    }
  }

  @media (max-width: 420px) {
    padding: 5px ${props => props.theme.metrics.baseMargin};

    > ${SubTitle} {
      font-size: 12px;
      left: 23px;
      bottom: 16px;
    }
  }
`

const SiteCard = ({ children, siteTitle, subTitle }) => (
  <Wrapper>
    <Brand>
      {siteTitle}
      <Translate>バウハウシィファイ</Translate>
    </Brand>
    {children}
    <SubTitle>{subTitle}</SubTitle>
    <BGText>
      DESIGN<span>x</span>CODING
    </BGText>
  </Wrapper>
)

export default SiteCard
