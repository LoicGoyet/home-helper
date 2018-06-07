import React from 'react';
import PropTypes from 'prop-types';
import { uniq } from '../../utils/arrays';

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
    this.titleInput = React.createRef();
    this.categoryInput = React.createRef();
    this.submit = this.submit.bind(this);
    this.getAutoCategory = this.getAutoCategory.bind(this);
  }

  componentDidMount() {
    this.titleInput.current.focus();
  }

  get categories() {
    return uniq(this.props.tasks.map(task => task.category));
  }

  get tasks() {
    return uniq(this.props.tasks.map(task => task.title));
  }

  getAutoCategory(event) {
    const { value } = event.target;
    const taskWtSameTitle = this.props.tasks.find(({ title }) => title === value);
    if (!taskWtSameTitle) return;

    this.categoryInput.current.value = taskWtSameTitle.category;
  }

  submit(event) {
    event.preventDefault();
    const titleInput = this.titleInput.current;
    const categoryInput = this.categoryInput.current;
    this.props.addTask(titleInput.value, categoryInput.value);
    this.form.current.reset();
    titleInput.focus();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submit} ref={this.form}>
          <input
            type="text"
            ref={this.titleInput}
            list="title-suggestions"
            placeholder="nom du produit"
            required
            onChange={this.getAutoCategory}
          />
          <input type="text" ref={this.categoryInput} list="category-suggestions" placeholder="categorie" required />

          <button type="submit" />
        </form>

        <datalist id="category-suggestions">
          {this.categories.map(suggestion => <option key={suggestion} value={suggestion} />)}
        </datalist>

        <datalist id="title-suggestions">
          {this.tasks.map(suggestion => <option key={suggestion} value={suggestion} />)}
        </datalist>
      </React.Fragment>
    );
  }
}

export default AddTask;
