import React from 'react'
import SVGInline from 'react-svg-inline'
import styled from 'styled-components'
import Vivus from 'vivus'

import svg from '!raw-loader!./logo.svg'

const SVGWrapper = styled(SVGInline)`
  display: inline-block;
  opacity: ${props => (props.show ? '1' : '0')};
  stroke: black;
  > svg {
    width: 100%;
    height: 100%;
  }
`

class Logo extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        show: true,
      })
      this.vivus = new Vivus('mwroteLogo', {
        type: 'oneByOne',
        duration: 100,
        animTimingFunction: Vivus.EASE,
      })
    }, 1000)
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
  render() {
    return <SVGWrapper show={`${this.state.show}`} svg={svg} {...this.props} />
  }
}

export default Logo
