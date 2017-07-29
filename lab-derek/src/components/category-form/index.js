import React from 'react';

class CategoryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.category)
      this.setState(props.category);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

//TODO: form should clear the value on submit.

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Budget Category'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='budget'
          type='number'
          step={0.01}
          placeholder='Budgeted Amount'
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.submitText} </button>
      </form>
    );
  }
}

export default CategoryForm;
