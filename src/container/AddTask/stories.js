import React from 'react';
import { storiesOf } from '@storybook/react';

import { withReduxProvider } from '../../../.storybook/decorators';
import AddTask from '.';

const stories = storiesOf('Container|AddTask', module).addDecorator(withReduxProvider);

stories.add('default', () => <AddTask />);

export default stories;
