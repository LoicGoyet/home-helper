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
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    event.preventDefault();
    this.props.addTask(this.titleInput.current.value);
    this.form.current.reset();
  }

  render() {
    return (
      <form onSubmit={this.submit} ref={this.form}>
        <input type="text" ref={this.titleInput} required />
      </form>
    );
  }
}

export default AddTask;
