import React from 'react';
import PropTypes from 'prop-types';

class AddTask extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
    categorySuggestions: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    categorySuggestions: [],
  };

  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.titleInput = React.createRef();
    this.categoryInput = React.createRef();
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.titleInput.current.focus();
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
    const { categorySuggestions } = this.props;

    return (
      <React.Fragment>
        <form onSubmit={this.submit} ref={this.form}>
          <input type="text" ref={this.titleInput} required placeholder="nom du produit" />
          <input type="text" ref={this.categoryInput} list="category-suggestions" required placeholder="categorie" />

          <button type="submit" />
        </form>

        <datalist id="category-suggestions">
          {categorySuggestions.map(suggestion => <option key={suggestion} value={suggestion} />)}
        </datalist>
      </React.Fragment>
    );
  }
}

export default AddTask;
