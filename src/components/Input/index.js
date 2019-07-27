import React from 'react';
import styled from 'styled-components';

// @TODO remove `reference` prop as no data should be fetch from UI with refs
const Input = React.forwardRef((props, ref) => <El {...props} ref={ref} />);

export default React.memo(Input);

const El = styled.input`
  --border-color: ${props => props.theme.colors.lightgray};
  --outer-shadow-color: transparent;
  --inner-shadow-color: transparent;
  --box-shadow: inset 0 0 0 1px var(--border-color), inset 0 0 0 0.125rem var(--inner-shadow-color),
    0 0 0 0.125rem var(--outer-shadow-color);
  --border-radius: 0.3125rem;

  font-size: 1rem;
  padding: 0.75rem;
  border: 0;
  display: block;
  width: 100%;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &:focus {
    --border-color: ${props => props.theme.colors.blue};
    --inner-shadow-color: var(--border-color);
    --outer-shadow-color: var(--border-color);
    outline-width: 0;
    position: relative;

    /* &[pattern]:invalid { */
    &:invalid {
      --border-color: ${props => props.theme.colors.red};
    }

    /* &[pattern]:valid { */
    &:valid {
      --border-color: ${props => props.theme.colors.green};
    }
  }

  &:not(:placeholder-shown):invalid {
    --border-color: ${props => props.theme.colors.red};
    --inner-shadow-color: var(--border-color);
  }
`;
