import React from 'react'
import styled from 'styled-components'
import { Logo } from '@components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: ${props => props.theme.metrics.baseMargin};

  > * {
    margin-top: ${props => props.theme.metrics.baseMargin};
  }

  > *:first-child {
    margin-top: 0;
  }

  @media (min-width: ${props => props.theme.breaks.lg}px) {
    height: 100%;
  }
`

const Link = styled.a``

const Copy = styled.span`
  font-size: ${props => props.theme.typo.smallSize}px;
  color: ${props => props.theme.colors.semiDark};
`

const LogoWrapper = styled(Logo)`
  width: 180px;
  height: auto;
`

const Footer = () => (
  <Wrapper>
    <Link href="http://mwrote.com">
      <LogoWrapper />
    </Link>
    <Copy>© {new Date().getFullYear()}</Copy>
  </Wrapper>
)

export default Footer
