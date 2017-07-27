import React from 'react';

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryInputValue: this.props.name || '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(evt) {
    evt.preventDefault();
    this.setState({
      categoryInputValue: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if(this.state.categoryInputValue.length < 1) {
      return;
    }
    this.props.onSubmit({
      name: this.state.categoryInputValue,
    });
    this.setState({
      categoryInputValue: '',
    });
  }

  render() {
    return (
      <form
        className='category-form'
        onSubmit={this.handleSubmit}
      >
        <input
          name='category-name'
          type='text'
          placeholder='Utilities, Food, Entertainment...'
          value={this.state.categoryInputValue}
          onChange={this.handleInputChange}
        />
        <button
          type='submit'
        >
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}
