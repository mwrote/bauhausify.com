import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;

  & > * {
    margin-top: ${props => props.theme.metrics.wideMargin};

    &:first-child {
      margin-top: 0;
    }
  }

  @media (max-width: ${props => props.theme.breaks.lg}px) {
    & > *:first-child {
      margin-top: ${props => props.theme.metrics.baseMargin};
    }
  }

  @media (min-width: ${props => props.theme.breaks.lg}px) {
    max-height: 100vh;
    overflow-y: auto;
  }
`

const Sidebar = ({ children, className, style }) => (
  <Wrapper className={className} style={style}>
    {children}
  </Wrapper>
)

export default Sidebar
