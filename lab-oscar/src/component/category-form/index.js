import React from 'react';

class CategoryForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Name: props.category ? props.category.Name : '',
      Budget: props.category? props.category.Budget : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    console.log('target', e.target.name );
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('test!!!', this.state);
    this.props.onComplete(Object.assign({}, this.state))
    this.setState({Name: '', Budget: ''})
  }

  render(){
    return(
      <form className='category-form' onSubmit={this.handleSubmit} >
        <input
          name='Name'
          type='text'
          placeholder='Enter a new Category'
          value={this.state.Name}
          onChange={this.handleChange}
        />
        <input
          name='Budget'
          type='text'
          placeholder='Enter a Budget'
          value={this.state.Budget}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonText} </button>
      </form>
    )
  }
}

export default CategoryForm;
