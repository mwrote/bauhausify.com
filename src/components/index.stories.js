import React from 'react'

import { storiesOf } from '@storybook/react'

import readme from './README.md'

storiesOf('Documents', module)
  .addParameters({
    readme: {
      content: readme,
    },
  })
  .add('README', () => '')
