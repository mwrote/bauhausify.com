import styled from 'styled-components'
import Toc from './Toc.js'

export default styled(Toc)`
  position: sticky;
  top: 0;
  height: 0;
  z-index: 100;
  background-color: white;

  &:before {
    content: '';
    position: fixed;
    top: 0;
    height: 100vh;
    width: calc(100% + ${props => props.theme.metrics.wideReadablePadding});
    left: -${props => props.theme.metrics.readablePadding};
    background-color: white;
    display: block;
    z-index: -1;
    overflow-y: auto;
    max-height: 100vh;
  }

  > .toc-list {
    padding-top: 1rem;
  }
`
