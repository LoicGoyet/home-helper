import React, { useCallback, useState, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import GoArrowSmallRight from 'react-icons/lib/go/arrow-small-right';
import IoRefresh from 'react-icons/lib/io/refresh';

import COLORS from 'style/colors';
import Button from 'components/Button';
import Input from 'components/Input';

const AddTaskForm = ({ values, onChange, onFieldsetSubmit, onSubmit, onReset, activeStep, lists, ...props }) => {
  const productInput = useRef();
  const categoryInput = useRef();
  const quantityInput = useRef();
  const quantityUnitInput = useRef();

  useEffect(
    () => {
      if (activeStep === 1) categoryInput.current.focus();
      if (activeStep === 2) quantityInput.current.focus();
    },
    [activeStep]
  );

  const [displaySuccess, setDisplaySuccess] = useState(false);

  useEffect(
    () => {
      if (displaySuccess) {
        setTimeout(() => setDisplaySuccess(false), 1000);
      }
    },
    [displaySuccess, setDisplaySuccess]
  );

  const onInputChange = useCallback(
    (input, type = 'string') => e => {
      const { value } = e.target;

      return onChange(e, {
        ...values,
        [input]: type === 'number' ? parseInt(value) : value,
      });
    },
    [onChange, values]
  );

  const isActiveFieldsetValid = useMemo(
    () => {
      if (activeStep === 0) return !!values.product;
      if (activeStep === 1) return !!values.category;
      return !!values.quantity && !!values.quantityUnit;
    },
    [activeStep, values]
  );

  const onProductChange = useCallback(onInputChange('product'), [onInputChange]);
  const onCategoryChange = useCallback(onInputChange('category'), [onInputChange]);
  const onQuantityChange = useCallback(onInputChange('quantity', 'number'), [onInputChange]);
  const onQuantityUnitChange = useCallback(onInputChange('quantityUnit'), [onInputChange]);

  const onResetForm = useCallback(
    () => {
      productInput.current.focus();
      onReset();
    },
    [productInput, onReset]
  );

  const onSubmitForm = useCallback(
    () => {
      onSubmit();
      onResetForm();
      setDisplaySuccess(true);
    },
    [onSubmit, setDisplaySuccess, onResetForm]
  );

  const onEnterPress = useCallback(
    e => {
      if (e.key !== 'Enter' || !isActiveFieldsetValid) return null;
      e.preventDefault();
      e.stopPropagation();
      if (activeStep < 2) return onFieldsetSubmit(e);
      return onSubmitForm(e);
    },
    [activeStep, onFieldsetSubmit, isActiveFieldsetValid, onSubmitForm]
  );

  const resetBtn = useMemo(
    () => (
      <ResetButton type="button" onClick={onResetForm}>
        <IoRefresh />
      </ResetButton>
    ),
    [onResetForm]
  );

  return (
    <Wrapper {...props} onKeyPress={onEnterPress}>
      <MainRow>
        <Fieldset step={0} activeStep={activeStep}>
          <Label>Produit</Label>

          <StyledInput
            ref={productInput}
            onChange={onProductChange}
            value={values.product}
            type="text"
            placeholder="Pâtes, Riz, Poulet..."
            list={lists.products}
          />
        </Fieldset>

        <Fieldset step={1} activeStep={activeStep}>
          <Label>Categorie</Label>

          <StyledInput
            ref={categoryInput}
            onChange={onCategoryChange}
            value={values.category}
            type="text"
            placeholder="Épicerie sâlée, Produits Frais, Boulangerie..."
            list={lists.categories}
            hasResetBtnAside
          />
          {resetBtn}
        </Fieldset>

        <Fieldset step={2} activeStep={activeStep}>
          <Label>Quantité</Label>
          <StyledInput
            ref={quantityInput}
            onChange={onQuantityChange}
            value={values.quantity}
            type="number"
            min="1"
            placeholder="nombre"
            tabindex="0"
          />
          <StyledInput
            ref={quantityUnitInput}
            onChange={onQuantityUnitChange}
            value={values.quantityUnit}
            type="text"
            placeholder="pièce(s), litre(s), gramme(s)..."
            list={lists.quantityUnits}
            tabindex="0"
            hasResetBtnAside
          />
          {resetBtn}
        </Fieldset>

        {activeStep < 2 && (
          <StepButton type="button" disabled={!isActiveFieldsetValid} onClick={onFieldsetSubmit}>
            <GoArrowSmallRight size={30} />
          </StepButton>
        )}

        {activeStep === 2 && (
          <StepButton type="submit" disabled={!isActiveFieldsetValid} onClick={onSubmitForm} color={COLORS.green}>
            <GoArrowSmallRight size={30} />
          </StepButton>
        )}

        <SuccessMessage isVisible={displaySuccess}>
          Produit ajouté !{' '}
          <span role="img" aria-label="icône de fête">
            🎉
          </span>
        </SuccessMessage>
      </MainRow>
    </Wrapper>
  );
};

AddTaskForm.propTypes = {
  values: PropTypes.shape({
    product: PropTypes.string,
    category: PropTypes.string,
    quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    quantityUnit: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
  lists: PropTypes.shape({
    products: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    quantityUnits: PropTypes.string.isRequired,
  }),
};

AddTaskForm.defaultProps = {
  lists: {
    products: undefined,
    categories: undefined,
    quantityUnits: undefined,
  },
};

export default AddTaskForm;

const boxShadow = css`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MainRow = styled.div`
  position: relative;
  z-index: 1;
  height: 2.875rem;
`;

const fieldsetPosition = ({ step, activeStep }) => {
  if (step < activeStep) {
    return css`
      transform: translate3d(0, -100%, 0);
    `;
  }

  if (step > activeStep) {
    return css`
      transform: translate3d(0, 100%, 0);
    `;
  }

  return css`
    transform: translate3d(0, 0, 0);
    opacity: 1;
    pointer-events: initial;
  `;
};

const Fieldset = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 3.125rem;
  display: flex;
  transition-property: transform, opacity;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  opacity: 0;
  pointer-events: none;
  background-color: ${COLORS.lightgray};
  border-radius: 0.3125rem;
  padding: 0.125rem;
  ${fieldsetPosition};
  ${boxShadow};
`;

const ResetButton = styled(Button).attrs({
  square: '2.875rem',
})`
  align-self: flex-start;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const Label = styled.span`
  flex-shrink: 0;
  flex-basis: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.black};
`;

const StyledInput = styled(Input)`
  --border-radius: 0.1895rem;
  flex-grow: 1;

  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  ${props =>
    props.hasResetBtnAside &&
    css`
      padding-right: 3.625rem;
    `}

  &:last-of-type {
    border-bottom-right-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  & + & {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: 0.0625rem;
  }
`;

const StepButton = styled(Button).attrs({
  square: '2.875rem',
  color: COLORS.blue,
  isBlock: true,
})`
  position: absolute;
  z-index: 1;
  right: 0;
  ${boxShadow};

  &:disabled {
    opacity: 0.5;
  }
`;

const SuccessMessage = styled.div`
  background-color: ${COLORS.green};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: 0.3125rem;
  transition-property: transform, opacity;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transform: ${props => (props.isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)')};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  user-select: ${props => (props.isVisible ? 'initial' : 'none')};
  pointer-events: ${props => (props.isVisible ? 'initial' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
