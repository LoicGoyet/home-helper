import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../Input';

const stories = storiesOf('Input', module);

stories.add('default', () => <Input onChange={action('onChange')} />);
stories.add('with placeholder', () => <Input onChange={action('onChange')} placeholder="Hello world !" />);
stories.add('with value', () => <Input onChange={action('onChange')} value="Hello world !" />);

export default stories;
