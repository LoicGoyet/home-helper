import React from 'react';
import PropTypes from 'prop-types';

import TasksList from '../TasksList';

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
  };

  renderOptions() {
    if (!this.state.isOptionsOpen) return;

    const { category } = this.props.section;

    return (
      <form onSubmit={this.submitOptions}>
        <input type="text" defaultValue={category} ref={this.categoryOptionsInput} />
      </form>
    );
  }

  render() {
    const { section } = this.props;

    return (
      <React.Fragment key={section.category}>
        <h2>{section.category}</h2>
        <button onClick={this.toggleOptions}>options</button>
        {this.renderOptions()}
        <TasksList tasks={section.tasks} />
      </React.Fragment>
    );
  }
}

export default TodosSection;
