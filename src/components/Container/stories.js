import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '../Container';

const stories = storiesOf('Components|Container', module);
stories.add('default', () => (
  <Container>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita dolores, repudiandae debitis quod
    magnam aliquam eligendi doloremque nam, dicta veritatis fugiat eaque nesciunt, ad itaque sed. Beatae, veritatis vel.
  </Container>
));

export default stories;
