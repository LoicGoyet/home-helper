import React from 'react';
import { storiesOf } from '@storybook/react';

import Accordion, { AccordionItem } from '.';

const story = storiesOf('Components|Accordion', module);
story.add('Default', () => (
  <Accordion>
    <AccordionItem header={() => <span>header</span>}>hello</AccordionItem>
    <AccordionItem header={() => <span>header</span>}>world</AccordionItem>
    <AccordionItem header={() => <span>header</span>}>world</AccordionItem>
  </Accordion>
));
