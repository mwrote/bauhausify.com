import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { addReadme } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';

import { base } from '../src/theme/base';

// User Config

addDecorator(addReadme);
addDecorator(story => (
  <ThemeProvider theme={base}>
    { story() }
  </ThemeProvider>
));
addParameters({
  readme: {
    StoryPreview: ({ children }) => <div>{children}</div>
  }
});

// Load stories

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}


// Gatsby x Storybook

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};

configure(loadStories, module);
