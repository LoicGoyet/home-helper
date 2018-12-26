import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs';

import Pill from '../Pill';
import { THEMES } from '../../style/colors';

const stories = storiesOf('Pill', module);

stories.add('default', () => {
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
});

stories.add('themes', () => (
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
));

export default stories;
