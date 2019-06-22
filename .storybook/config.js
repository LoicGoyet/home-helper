import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import COLORS from '../src/style/colors';
import GlobalStyle from '../src/style/global';

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /\**\/stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const StorybookGlobalStyle = createGlobalStyle`
  body {
    padding: 1rem;
    color: ${COLORS.white};
    background-color: initial;
  }
`;

addDecorator(storyFn => (
  <ThemeProvider theme={{}}>
    <React.Fragment>
      <StorybookGlobalStyle />
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  </ThemeProvider>
));

addParameters({ backgrounds: [
  { name: "white", value: "#ffffff" },
  { name: "purple", value: "#140A43", default: true },
]});


addDecorator(withA11y)
addDecorator(withKnobs)

configure(loadStories, module);
