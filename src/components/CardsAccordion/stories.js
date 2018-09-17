import React from 'react';
import { storiesOf } from '@storybook/react';

import CardsAccordion, { CardsAccordionItem } from '../CardsAccordion';

const story = storiesOf('CardsAccordion', module);
story.add('Default', () => (
  <CardsAccordion>
    <CardsAccordionItem header={() => <span>header</span>}>hello</CardsAccordionItem>
    <CardsAccordionItem header={() => <span>header</span>}>world</CardsAccordionItem>
  </CardsAccordion>
));
