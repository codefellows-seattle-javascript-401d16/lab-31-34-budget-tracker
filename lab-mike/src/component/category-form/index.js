import React from 'react';

class CategoryForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.price : 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit} >
        <input
          name='name'
          type='text'
          placeholder='Enter a Name'
          value={this.state.Name}
          onChange={this.handleChange}
        />

        <input
          name='budget'
          type='text'
          placeholder='Enter a Budget'
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.buttonContent}</button>

      </form>
    );
  }
}
