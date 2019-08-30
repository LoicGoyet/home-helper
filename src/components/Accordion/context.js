import React, { useReducer, useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

const AccordionContext = React.createContext();

const accordionReducer = (state, action) => {
  switch (action.type) {
    case 'toggle': {
      if (state.openIndex === action.index) {
        return {
          ...state,
          openIndex: -1,
        };
      }

      return {
        ...state,
        openIndex: action.index,
      };
    }

    default: {
      return state;
    }
  }
};

export const AccordionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accordionReducer, { openIndex: -1 });

  return <AccordionContext.Provider value={[state, dispatch]}>{children}</AccordionContext.Provider>;
};

AccordionProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export const useAccordion = index => {
  const context = useContext(AccordionContext);
  if (context === undefined) throw new Error('useAccordion must be used within a AccorionProvider');

  const [state, dispatch] = context;

  const isOpen = useMemo(() => state.openIndex === index, [state.openIndex, index]);

  const toggle = useCallback(
    () =>
      dispatch({
        type: 'toggle',
        index,
      }),
    [dispatch, index]
  );

  return [isOpen, toggle];
};
