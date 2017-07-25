import React from 'react';

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      timestamp: '',
      name: '',
      budget: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render(){
    return(
      <form className='category-form' onSubmit={this.handleSubmit}>
       This is category form
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='budget'
          placeholder='Budget Amount'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>

      </form>
    );
  }
}

export default CategoryForm;
