import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({name: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <form>
        <input
          name='name'
          type='text'
          placeholder='name'
          value={this.state.name}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}
export default CategoryForm;
