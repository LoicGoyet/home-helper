import React from 'react';
import PropTypes from 'prop-types';

class AddTask extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
    categorySuggestions: PropTypes.arrayOf(PropTypes.string),
    titleSuggestions: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    categorySuggestions: [],
    titleSuggestions: [],
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
    const { categorySuggestions, titleSuggestions } = this.props;

    return (
      <React.Fragment>
        <form onSubmit={this.submit} ref={this.form}>
          <input type="text" ref={this.titleInput} list="title-suggestions" placeholder="nom du produit" required />
          <input type="text" ref={this.categoryInput} list="category-suggestions" placeholder="categorie" required />

          <button type="submit" />
        </form>

        <datalist id="category-suggestions">
          {categorySuggestions.map(suggestion => <option key={suggestion} value={suggestion} />)}
        </datalist>

        <datalist id="title-suggestions">
          {titleSuggestions.map(title => <option key={title} value={title} />)}
        </datalist>
      </React.Fragment>
    );
  }
}

export default AddTask;
