import React from 'react';
import { text, color } from '@storybook/addon-knobs';

import Pill from '.';
import { THEMES } from '../../style/colors';

export default {
  title: 'Components|Pill',
  parameters: {
    backgrounds: [{ name: 'transparent', value: 'rgba(255, 255, 255, 0)', default: true }],
  },
};

export const story1 = () => {
  const pillColor = color('color', '#140A43');
  const children = text('children', 'Hello World !');

  return (
    <React.Fragment>
      <Pill color={pillColor} style={{ marginRight: '0.5rem' }}>
        {children}
      </Pill>

      <Pill color={pillColor} isBlock>
        {children}
      </Pill>
    </React.Fragment>
  );
};

story1.story = {
  name: 'default',
};

export const story2 = () => (
  <React.Fragment>
    {Object.keys(THEMES).map(theme => {
      const props = {
        color: theme,
        style: { marginRight: '0.5rem' },
      };

      return (
        <React.Fragment key={theme}>
          <Pill {...props}>{theme}</Pill>

          <Pill {...props} isBlock>
            {theme}
          </Pill>
        </React.Fragment>
      );
    })}
  </React.Fragment>
);

story2.story = {
  name: 'themes',
};
