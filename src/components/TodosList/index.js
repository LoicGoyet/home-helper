import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Task from '../Task';
import Button from '../Button';
import COLORS from '../../style/colors';

class TodosList extends React.Component {
  static propTypes = {
    tasks: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
    units: PropTypes.object.isRequired,
    toggleTask: PropTypes.func,
  };

  static defaultProps = {
    toggleTask: () => undefined,
  };

  state = {
    showDone: 5,
  };

  get toDoTasksByCategories() {
    const { tasks } = this.props;
    return tasks.allIds
      .filter(id => !tasks.byId[id].done)
      .sort((idA, idB) => tasks.byId[idA].createdAt > tasks.byId[idB].createdAt)
      .reduce((acc, id) => {
        const category = this.getCategoryFromTask(id).id;

        return {
          ...acc,
          [category]: [...(acc[category] || []), id],
        };
      }, {});
  }

  get doneTasks() {
    const { tasks } = this.props;
    return tasks.allIds
      .filter(id => tasks.byId[id].done)
      .sort((idA, idB) => tasks.byId[idA].updatedAt < tasks.byId[idB].updatedAt);
  }

  getTaskProps = id => {
    const task = this.props.tasks.byId[id];
    const product = this.props.products.byId[task.product];
    const category = this.props.categories.byId[product.category];
    const unit = this.props.units.byId[task.unit];

    return {
      task,
      product,
      category,
      unit,
    };
  };

  getCategoryFromTask = id => {
    const { categories, tasks, products } = this.props;
    const productId = tasks.byId[id].product;
    const categoryId = products.byId[productId].category;
    return categories.byId[categoryId];
  };

  showMoreDoneTasks = () => {
    this.setState({
      showDone: this.state.showDone + 5,
    });
  };

  render = () => (
    <React.Fragment>
      {Object.keys(this.toDoTasksByCategories).map(categoryId => (
        <Department key={categoryId}>
          <Category>{this.props.categories.byId[categoryId].title}</Category>

          {this.toDoTasksByCategories[categoryId].map(taskId => (
            <Task key={taskId} {...this.getTaskProps(taskId)} toggleTask={this.props.toggleTask} />
          ))}
        </Department>
      ))}

      {Object.keys(this.toDoTasksByCategories).length === 0 && <DoneMessage />}

      <Department>
        {this.doneTasks.slice(0, this.state.showDone).map(taskId => (
          <Task key={taskId} {...this.getTaskProps(taskId)} toggleTask={this.props.toggleTask} />
        ))}

        {this.doneTasks.length > this.state.showDone && <LoadMoreDoneTasksButton onClick={this.showMoreDoneTasks} />}
      </Department>
    </React.Fragment>
  );
}

export default TodosList;

const Department = styled.section`
  margin-bottom: 1.5rem;
`;

const Category = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const DoneMessage = styled.p.attrs({
  children: "Il n'y a plus rien à acheter !",
})`
  font-size: 1.25rem;
  text-align: center;
  margin: 4rem 0;
  user-select: none;
  pointer-events: none;
`;

const LoadMoreDoneTasksButton = styled(Button).attrs({
  children: 'Afficher plus de tâches terminées',
  color: COLORS.white,
})`
  width: 100%;
  margin: 1rem 0;
`;
