import React from 'react'
import ReactTooltip from 'react-tooltip'

import { day } from '@src/utils'

const Date = ({ date, className }) => (
  <>
    <span data-tip={date} data-delay-show="1000" className={className}>
      {day.about(date)}
    </span>
    <ReactTooltip />
  </>
)

export default Date
