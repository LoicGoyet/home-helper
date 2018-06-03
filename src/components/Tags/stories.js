import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array } from '@storybook/addon-knobs/react';

import Tags from '../Tags';

const stories = storiesOf('Tags', module);
stories.addDecorator(withKnobs);
stories.add('default', () => <Tags items={array('items', ['Maison', 'Bento'])} />);

export default stories;
