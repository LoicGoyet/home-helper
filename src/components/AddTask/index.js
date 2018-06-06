import React from 'react';
import PropTypes from 'prop-types';

class AddTask extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.titleInput = React.createRef();
    this.categoryInput = React.createRef();
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    event.preventDefault();
    const title = this.titleInput.current.value;
    const category = this.categoryInput.current.value;
    this.props.addTask(title, category);
    this.form.current.reset();
  }

  render() {
    return (
      <form onSubmit={this.submit} ref={this.form}>
        <input type="text" ref={this.titleInput} required />
        <input type="text" ref={this.categoryInput} list="category-suggestions" required />

        <button type="submit" />
      </form>
    );
  }
}

export default AddTask;
