import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '../Checkbox';

const stories = storiesOf('Checkbox', module).addParameters({
  backgrounds: [{ name: 'transparent', value: 'rgba(255, 255, 255, 0)', default: true }],
});

stories.add('unchecked', () => <Checkbox onChange={action('onChange')} title="example of checkbox" />);
stories.add('checked', () => <Checkbox onChange={action('onChange')} title="example of checkbox" isChecked />);

export default stories;
