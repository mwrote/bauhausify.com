import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  font-size: 0.8em;
  padding: 0.1em 0.5em;
  border-radius: 1em;
  background-color: ${props => props.theme.colors.base};
  color: rgba(255, 255, 255, ${props => props.theme.colors.baseAlpha});
  margin: 2px;
  display: inline-flex;

  &.design {
    background-color: ${props => props.theme.colors.design};
  }
`

const Badge = ({ children, variant }) => (
  <Wrapper className={variant} variant={variant}>
    {children}
  </Wrapper>
)

export default Badge
