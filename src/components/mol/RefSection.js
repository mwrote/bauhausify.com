import styled from 'styled-components'
import Color from 'color'

const RefSection = styled.div`
  background-color: ${Color('#AAAAAA')
    .alpha(0.1)
    .string()};
  padding: ${props => props.theme.metrics.readablePadding};
  position: relative;
  left: -${props => props.theme.metrics.readablePadding};
  width: calc(100% + ${props => props.theme.metrics.wideReadablePadding});
  display: flex;
  flex-direction: column;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`

export default RefSection
