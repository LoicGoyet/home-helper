import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AccordionItem from './card';

export { AccordionItem };

const Accordion = ({ children, className }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className={className}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: index === openIndex,
          index,
          setOpenIndex,
        })
      )}
    </section>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  className: undefined,
};

export default React.memo(Accordion);
