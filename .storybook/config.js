import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-console';
import { checkA11y } from '@storybook/addon-a11y';
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { withKnobs } from '@storybook/addon-knobs';
import { injectGlobal } from 'styled-components';

import COLORS from '../src/style/colors';

import '../src/style/global';

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /\**\/stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

injectGlobal`
  body {
    padding: 1rem;
    color: ${COLORS.white};
    background-color: initial;
  }
`;

addDecorator(withBackgrounds([
  { name: "white", value: "#ffffff" },
  { name: "purple", value: "#140A43", default: true },
]));

addDecorator(checkA11y)
addDecorator(withKnobs)

configure(loadStories, module);
