import React from 'react';
import PropTypes from 'prop-types';

import AccordionItem from 'components/Accordion/card';
import { AccordionProvider } from 'components/Accordion/context';

const Accordion = ({ children, className }) => (
  <section className={className}>
    <AccordionProvider>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          index,
        })
      )}
    </AccordionProvider>
  </section>
);

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  className: undefined,
};

export default React.memo(Accordion);
export { AccordionItem };
