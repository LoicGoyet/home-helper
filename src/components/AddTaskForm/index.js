import React, { useCallback, useState, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import GoArrowSmallRight from 'react-icons/lib/go/arrow-small-right';

import COLORS from '../../style/colors';
import Button from '../Button';
import InputComp from '../Input';

const AddTaskForm = ({ values, onChange, onFieldsetSubmit, onSubmit, onReset, activeStep, ...props }) => {
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

  const onEnterPress = useCallback(
    e => {
      if (e.key !== 'Enter' || !isActiveFieldsetValid) return null;
      e.preventDefault();
      e.stopPropagation();
      if (activeStep < 2) return onFieldsetSubmit(e);
      return onSubmitForm(e);
    },
    [activeStep, onFieldsetSubmit, onSubmit, isActiveFieldsetValid]
  );

  const onSubmitForm = useCallback(
    () => {
      onSubmit();
      onResetForm();
      setDisplaySuccess(true);
    },
    [onSubmit, productInput, setDisplaySuccess, onResetForm]
  );

  const onResetForm = useCallback(
    () => {
      productInput.current.focus();
      onReset();
    },
    [productInput, onReset]
  );

  const isResetButtonVisible = useMemo(() => activeStep !== 0, [activeStep]);

  return (
    <Wrapper {...props} onKeyPress={onEnterPress}>
      <MainRow>
        <Fieldset step={0} activeStep={activeStep}>
          <Label>Produit</Label>
          <Input
            ref={productInput}
            onChange={onProductChange}
            value={values.product}
            type="text"
            placeholder="Pâtes, Riz, Poulet..."
          />
        </Fieldset>

        <Fieldset step={1} activeStep={activeStep}>
          <Label>Categorie</Label>
          <Input
            ref={categoryInput}
            onChange={onCategoryChange}
            value={values.category}
            type="text"
            placeholder="Épicerie sâlée, Produits Frais, Boulangerie..."
          />
        </Fieldset>

        <Fieldset step={2} activeStep={activeStep}>
          <Label>Quantité</Label>
          <Input
            ref={quantityInput}
            onChange={onQuantityChange}
            value={values.quantity}
            type="number"
            min="1"
            placeholder="nombre"
          />
          <Input
            ref={quantityUnitInput}
            onChange={onQuantityUnitChange}
            value={values.quantityUnit}
            type="text"
            placeholder="pièce(s), litre(s), gramme(s)..."
          />
        </Fieldset>

        {activeStep < 2 && (
          <StepButton type="button" disabled={!isActiveFieldsetValid} onClick={onFieldsetSubmit}>
            <GoArrowSmallRight size={30} />
          </StepButton>
        )}

        {activeStep === 2 && (
          <SubmitButton type="submit" disabled={!isActiveFieldsetValid} onClick={onSubmitForm}>
            <GoArrowSmallRight size={30} />
          </SubmitButton>
        )}

        <SuccessMessage isVisible={displaySuccess}>Produit ajouté ! 🎉</SuccessMessage>
      </MainRow>

      <ResetButton isVisible={isResetButtonVisible} type="button" onClick={onResetForm}>
        reset
      </ResetButton>
    </Wrapper>
  );
};

AddTaskForm.propTypes = {
  values: PropTypes.shape({
    product: PropTypes.string,
    category: PropTypes.string,
    quantity: PropTypes.number,
    quantityUnit: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default AddTaskForm;

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
`;

const Label = styled.span`
  flex-shrink: 0;
  flex-basis: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.black};
`;

const Input = styled(InputComp)`
  --border-radius: 0.1895rem;
  flex-grow: 1;

  border-bottom-right-radius: 0;
  border-top-right-radius: 0;

  &:last-child {
    border-bottom-right-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  & + & {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
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

  &:disabled {
    opacity: 0.5;
  }
`;

const SubmitButton = styled(StepButton).attrs({
  color: COLORS.green,
})``;

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

const ResetButton = styled(Button).attrs({
  color: COLORS.white,
})`
  opacity: ${props => (props.isVisible ? 1 : 0)};
  pointer-events: ${props => (props.isVisible ? 'initial' : 'none')};
  position: relative;
  z-index: 0;
  align-self: flex-start;
`;
