import React from 'react';

import Accordion, { AccordionItem } from 'components/Accordion';

export default { title: 'components|Accordion' };

export const story1 = () => (
  <Accordion>
    <AccordionItem header={() => <span>header</span>}>hello</AccordionItem>
    <AccordionItem header={() => <span>header</span>}>world</AccordionItem>
    <AccordionItem header={() => <span>header</span>}>world</AccordionItem>
  </Accordion>
);

story1.story = {
  name: 'default',
};
