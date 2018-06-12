import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdAddBox } from 'react-icons/lib/md';
// /add-box

import { uniq } from '../../utils/arrays';
import COLORS from '../../style/colors';
import Button from '../Button';
import InputComponent from '../Input';

class AddTask extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    tasks: [],
  };

  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.submit = this.submit.bind(this);
    this.getAutoCategory = this.getAutoCategory.bind(this);
    this.manageFormStep = this.manageFormStep.bind(this);

    this.titleInput = React.createRef();
    this.categoryInput = React.createRef();

    this.inputs = [this.titleInput, this.categoryInput];
  }

  state = {
    step: 0,
    success: false,
  };

  componentDidMount() {
    this.titleInput.current.focus();
  }

  componentDidUpdate() {
    if (this.triggerSubmit) return this.submit();
    this.skipAutoFilledCategoryStep();

    // Auto focus on the next input displayed
    setTimeout(() => this.inputs[this.state.step].current.focus(), 200);
  }

  get categories() {
    return uniq(this.props.tasks.map(task => task.category));
  }

  get tasks() {
    return uniq(this.props.tasks.map(task => task.title));
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

  getAutoCategory() {
    const { value } = this.titleInput.current;
    const taskWtSameTitle = this.props.tasks.find(({ title }) => title === value);
    if (!taskWtSameTitle) return;

    this.categoryInput.current.value = taskWtSameTitle.category;
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
    this.setState({ step: 0 });
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

  skipAutoFilledCategoryStep() {
    const skip = this.state.step === 1 && this.categoryInput.current.value !== '';
    if (!skip) return;

    return this.setState({ step: this.state.step + 1 });
  }

  submit() {
    const titleInput = this.titleInput.current;
    const categoryInput = this.categoryInput.current;
    this.props.addTask(titleInput.value, categoryInput.value);
    this.reset();
    this.displaySuccessMessage();
  }

  renderDatalist() {
    return (
      <React.Fragment>
        <datalist id="category-suggestions">
          {this.categories.map(suggestion => <option key={suggestion} value={suggestion} />)}
        </datalist>

        <datalist id="title-suggestions">
          {this.tasks.map(suggestion => <option key={suggestion} value={suggestion} />)}
        </datalist>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <form onSubmit={this.manageFormStep} ref={this.form}>
            <FormStep style={this.getFormStepThemeVars(0)}>
              <FormRow>
                <Label>Produit</Label>

                <Input
                  type="text"
                  reference={this.titleInput}
                  list="title-suggestions"
                  placeholder="nom du produit"
                  required={this.isInputRequired(0)}
                  onChange={this.getAutoCategory}
                />
              </FormRow>
            </FormStep>

            <FormStep style={this.getFormStepThemeVars(1)}>
              <FormRow>
                <Label>Categorie</Label>

                <Input
                  type="text"
                  reference={this.categoryInput}
                  list="category-suggestions"
                  placeholder="categorie"
                  required={this.isInputRequired(1)}
                />
              </FormRow>
            </FormStep>

            <Submit type="submit" aria-label={this.isLastStep ? 'Valider' : 'Étape suivante'}>
              <MdAddBox />
            </Submit>
          </form>

          <SuccessMessage style={this.successMessageThemeVars}>Item ajouté !</SuccessMessage>
        </Wrapper>

        {this.renderDatalist()}
      </React.Fragment>
    );
  }
}

export default AddTask;

const Wrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  height: 50px;
`;

const FormStep = styled.div`
  height: 50px;
  transform: var(--transform);
  opacity: var(--opacity);
  pointer-events: var(--pointer-events);
  position: absolute;
  left: 0;
  top: 0;
  right: 50px;
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
  square: '50px',
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
