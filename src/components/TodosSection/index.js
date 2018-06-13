import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdSettings } from 'react-icons/lib/md';

import TasksList from '../TasksList';
import FormGroup from '../FormGroup';
import Button from '../Button';
import Modal from '../Modal';

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
      <Modal isOpen={this.state.isOptionsOpen} toggle={this.toggleOptions}>
        <OptionHeading>Réglages {category}</OptionHeading>

        <form onSubmit={this.submitOptions}>
          <FormGroup
            id={`${category}-title`}
            label="nom de catégorie"
            defaultValue={category}
            innerRef={this.categoryOptionsInput}
          />

          <OptionSubmit type="submit" theme="success" block>
            Enregistrer
          </OptionSubmit>
        </form>
      </Modal>
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

const OptionHeading = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 1rem;
`;

const OptionSubmit = styled(Button)`
  margin-left: auto;
  display: flex;
`;
