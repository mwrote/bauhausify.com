import React from 'react'
import styled from 'styled-components'
import Color from 'color'

const Wrapper = styled.div`
  position: relative;
  background-color: ${props =>
    Color(props.theme.colors.light)
      .alpha(props.theme.colors.baseAlpha)
      .string()};
  border-radius: ${props => props.theme.effects.baseRadius}px;
  padding: ${props => props.theme.metrics.readablePadding};

  display: flex;
  flex-direction: column;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  &.definition,
  &.external {
    position: relative;

    &::before,
    &::after {
      content: '';
      width: ${props => props.theme.metrics.wideMargin};
      height: ${props => props.theme.metrics.wideMargin};
      position: absolute;
    }
    &::before {
      left: 0;
      top: 0;
      border-top: 1px solid ${props => props.theme.colors.dark};
      border-left: 1px solid ${props => props.theme.colors.dark};
    }
    &::after {
      right: 0;
      bottom: 0;
      border-bottom: 1px solid ${props => props.theme.colors.dark};
      border-right: 1px solid ${props => props.theme.colors.dark};
    }
  }
`

const Title = styled.div`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  top: -1px;
  left: -1px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.dark};
`

const Card = ({ children, variant, className, title }) => (
  <Wrapper variant={variant} className={`${variant} ${className}`}>
    {title ? <Title>{title}</Title> : null}
    {children}
  </Wrapper>
)

export default Card
