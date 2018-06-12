import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdSettings } from 'react-icons/lib/md';

import COLORS from '../../style/colors';
import TasksList from '../TasksList';
import Card from '../Card';
import FormGroup from '../FormGroup';
import Button from '../Button';

class TodosSection extends React.Component {
  static propTypes = {
    section: PropTypes.shape({
      category: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    updateCategory: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.categoryOptionsInput = React.createRef();
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  state = {
    isOptionsOpen: false,
  };

  get themeVars() {
    const { isOptionsOpen } = this.state;

    return {
      '--options-transform': isOptionsOpen ? 'translateX(0)' : 'translateX(100%)',
      '--option-backdrop-pointer-events': isOptionsOpen ? 'initial' : 'none',
      '--option-backdrop-opacity': isOptionsOpen ? 0.75 : 0,
    };
  }

  toggleOptions = () => this.setState({ isOptionsOpen: !this.state.isOptionsOpen });

  submitOptions = event => {
    event.preventDefault();
    const { category } = this.props.section;
    const newCategory = this.categoryOptionsInput.current.value;
    this.props.updateCategory(category, newCategory);
    return this.toggleOptions();
  };

  renderOptions() {
    const { category } = this.props.section;

    return (
      <React.Fragment>
        <OptionBackdrop style={this.themeVars} onClick={this.toggleOptions} />

        <OptionWrapper style={this.themeVars}>
          <form onSubmit={this.submitOptions}>
            <FormGroup
              id={`${category}-title`}
              label="title"
              defaultValue={category}
              innerRef={this.categoryOptionsInput}
            />

            <OptionSubmit type="submit" theme="success" block>
              Enregistrer
            </OptionSubmit>
          </form>
        </OptionWrapper>
      </React.Fragment>
    );
  }

  render() {
    const { category, tasks } = this.props.section;

    return (
      <Wrapper>
        <Header>
          <Heading>{category}</Heading>

          <SettingsTrigger onClick={this.toggleOptions}>
            <MdSettings size={16} />
          </SettingsTrigger>
        </Header>

        {this.renderOptions()}
        <TasksList tasks={tasks} />
      </Wrapper>
    );
  }
}

export default TodosSection;

const Wrapper = styled.section`
  margin: 1rem 0 3rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Heading = styled.h2`
  margin: 0 0.5rem 0 0;
  font-size: 1.75rem;
`;

const SettingsTrigger = styled.button`
  background-color: transparent;
  border: 0;
  color: inherit;
  width: 2rem;
  height: 2rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const OptionWrapper = styled(Card)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 300px;
  width: calc(100% - 60px);
  z-index: 1000;
  transform: var(--options-transform);
  transition: all 200ms ease-in-out;
`;

const OptionSubmit = styled(Button)`
  margin-left: auto;
  display: flex;
`;

const OptionBackdrop = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background-color: ${COLORS.violet};
  pointer-events: var(--option-backdrop-pointer-events);
  opacity: var(--option-backdrop-opacity);
  transition: all 200ms ease-in-out;
  border: 0;
`;
