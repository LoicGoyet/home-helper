import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdAddBox } from 'react-icons/lib/md';
import { normalizeStr } from '../../utils/strings';

import COLORS from '../../style/colors';
import Button from '../Button';
import InputComponent from '../Input';
import {
  TODOS_CATEGORIES_SUGGESTIONS,
  TODOS_PRODUCTS_SUGGESTIONS,
  TODOS_UNITS_SUGGESTIONS,
} from '../../container/SuggestionsLists';

class AddTask extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
    units: PropTypes.object,
    categories: PropTypes.object,
    products: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    units: { byId: {}, allIds: [] },
    categories: { byId: {}, allIds: [] },
    products: { byId: {}, allIds: [] },
    className: undefined,
  };

  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.submit = this.submit.bind(this);
    this.getAutoCategory = this.getAutoCategory.bind(this);
    this.manageFormStep = this.manageFormStep.bind(this);

    this.productInput = React.createRef();
    this.categoryInput = React.createRef();
    this.quantityInput = React.createRef();
    this.quantityUnitInput = React.createRef();

    this.inputs = [this.productInput, this.categoryInput, [this.quantityInput, this.quantityUnitInput]];
  }

  state = {
    step: 0,
    success: false,
    autoQuantityUnit: undefined,
  };

  componentDidUpdate() {
    if (this.triggerSubmit) return this.submit();
    this.autoFillInputs();

    // Auto focus on the next input displayed
    if (this.state.step === 0) return;
    const step = this.inputs[this.state.step];
    const nextInput = Array.isArray(step) ? step[0] : step;
    setTimeout(() => nextInput.current.focus(), 200);
  }

  get isLastStep() {
    return this.state.step === Object.keys(this.inputs).length - 1;
  }

  get triggerSubmit() {
    return this.state.step === Object.keys(this.inputs).length;
  }

  get successMessageThemeVars() {
    const { success, step } = this.state;

    let transform = step === 0 ? 'translateY(100%)' : 'translateY(-100%)';
    if (success) transform = 'translateY(0)';

    return {
      '--opacity': success ? '1' : '0',
      '--pointer-events': success ? 'initial' : 'none',
      '--transform': transform,
    };
  }

  getStoredProductId = value => {
    const { products } = this.props;
    return products.allIds.find(id => normalizeStr(products.byId[id].title) === normalizeStr(value));
  };

  getAutoCategory() {
    const { products, categories } = this.props;

    const storedProductId = this.getStoredProductId(this.productInput.current.value);
    if (storedProductId === undefined) return;
    this.categoryInput.current.value = categories.byId[products.byId[storedProductId].category].title;
  }

  getAutoQuantityUnit() {
    const { products, units } = this.props;

    const storedProductId = this.getStoredProductId(this.productInput.current.value);
    if (storedProductId === undefined) return;
    this.quantityUnitInput.current.value = units.byId[products.byId[storedProductId].defaultUnit].title;
  }

  getFormStepThemeVars(index) {
    const { step } = this.state;
    const active = index === step;

    const opacity = active ? '1' : '0';
    const pointerEvents = active ? 'initial' : 'none';

    return {
      '--transform': `translateY(${(index - step) * 100}%)`,
      '--opacity': opacity,
      '--pointer-events': pointerEvents,
    };
  }

  manageFormStep(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.isLastStep) return this.submit();
    this.setState({ step: this.state.step + 1 });
  }

  isInputRequired(step) {
    return this.state.step === step;
  }

  reset() {
    this.setState({ step: 0, autoQuantityUnit: undefined });
    this.form.current.reset();
    this.inputs[0].current.focus();
  }

  displaySuccessMessage() {
    let success = true;
    this.setState({ success }, () => {
      success = false;
      setTimeout(() => this.setState({ success }), 1000);
    });
  }

  autoFillInputs() {
    if (this.state.step !== 1) return;
    this.getAutoCategory();
    this.getAutoQuantityUnit();
    if (this.categoryInput.current.value === '') return;
    return this.setState({ step: this.state.step + 1 });
  }

  submit() {
    const product = this.productInput.current.value;
    const category = this.categoryInput.current.value;
    const quantity = parseInt(this.quantityInput.current.value);
    const quantityUnit = this.quantityUnitInput.current
      ? this.quantityUnitInput.current.value
      : this.state.autoQuantityUnit;
    this.props.addTask(product, category, quantity, quantityUnit);
    this.reset();
    this.displaySuccessMessage();
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper className={this.props.className}>
          <form onSubmit={this.manageFormStep} ref={this.form}>
            <FormStep style={this.getFormStepThemeVars(0)}>
              <FormRow>
                <Label>Produit</Label>

                <Input
                  type="text"
                  reference={this.productInput}
                  list={TODOS_PRODUCTS_SUGGESTIONS}
                  placeholder="nom du produit"
                  required={this.isInputRequired(0)}
                />
              </FormRow>
            </FormStep>

            <FormStep style={this.getFormStepThemeVars(1)}>
              <FormRow>
                <Label>Categorie</Label>

                <Input
                  type="text"
                  reference={this.categoryInput}
                  list={TODOS_CATEGORIES_SUGGESTIONS}
                  placeholder="categorie"
                  required={this.isInputRequired(1)}
                />
              </FormRow>
            </FormStep>

            <FormStep style={this.getFormStepThemeVars(2)}>
              <FormRow>
                <Label>Quantité</Label>

                <Input
                  type="number"
                  min="1"
                  reference={this.quantityInput}
                  placeholder="nombre"
                  required={this.isInputRequired(2)}
                />

                <Input
                  type="text"
                  reference={this.quantityUnitInput}
                  list={TODOS_UNITS_SUGGESTIONS}
                  placeholder="unité"
                  required={this.isInputRequired(2)}
                />
              </FormRow>
            </FormStep>

            <Submit type="submit" aria-label={this.isLastStep ? 'Valider' : 'Étape suivante'}>
              <MdAddBox />
            </Submit>
          </form>

          <SuccessMessage style={this.successMessageThemeVars}>Item ajouté !</SuccessMessage>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default AddTask;

const Wrapper = styled.div`
  position: relative;
  height: 3.125rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const FormStep = styled.div`
  height: 3.125rem;
  transform: var(--transform);
  opacity: var(--opacity);
  pointer-events: var(--pointer-events);
  position: absolute;
  left: 0;
  top: 0;
  right: 3.125rem;
  transition: 200ms linear;
  z-index: 1;
`;

const FormRow = styled.label`
  display: flex;
  height: 100%;
  color: black;
  align-items: stretch;
`;

const Label = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 0.75rem;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  font-weight: bold;
  background-color: ${COLORS.lightgray};
  flex-basis: 5rem;
  flex-shrink: 0;
`;

const Input = styled(InputComponent)`
  --border-color: transparent;
  flex-grow: 1;
  box-shadow: inset 0 0 0 1px var(--border-color), inset 0 0 0 0.25rem var(--inner-shadow-color);

  &:invalid {
    --inner-shadow-color: ${COLORS.lightgray};
  }

  &:focus {
    position: relative;
    z-index: 1;
  }

  &:focus:invalid {
    --border-color: transparent;
    --inner-shadow-color: ${COLORS.blue};
  }

  &:not(:placeholder-shown):invalid {
    --inner-shadow-color: ${COLORS.lightgray};
  }
`;

const Submit = styled(Button).attrs({
  color: COLORS.blue,
  block: true,
  square: '3.125rem',
})`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.5rem;
`;

const SuccessMessage = styled.div`
  background-color: ${COLORS.green};
  color: ${COLORS.white};
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  pointer-events: var(--pointer-events);
  opacity: var(--opacity);
  transform: var(--transform);
  transition: all 200ms linear;
  display: flex;
  align-items: center;
`;
