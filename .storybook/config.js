import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '../src/style/theme';
import GlobalStyle from '../src/style/global';

const StorybookGlobalStyle = createGlobalStyle`
  body {
    padding: 1rem;
    color: ${props => props.theme.colors.white};
    background-color: initial;
  }
`;

addDecorator(storyFn => (
  <Theme>
    <React.Fragment>
      <StorybookGlobalStyle />
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  </Theme>
));

addParameters({ backgrounds: [
  { name: "white", value: "#ffffff" },
  { name: "purple", value: "#140A43", default: true },
]});


addDecorator(withA11y)
addDecorator(withKnobs)

// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\**\/stories\.js$/), module);
