import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-console';
import { checkA11y } from '@storybook/addon-a11y';
import backgrounds from "@storybook/addon-backgrounds";
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { injectGlobal } from 'styled-components';


import '../src/style/global';

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /\**\/stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

injectGlobal`
  body {
    padding: 1rem;
  }
`;

addDecorator(backgrounds([
  { name: "white", value: "#ffffff", default: true },
  { name: "purple", value: "#140A43" },
]));

addDecorator(checkA11y)
addDecorator(withKnobs)

configure(loadStories, module);
