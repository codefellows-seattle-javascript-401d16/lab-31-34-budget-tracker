import React from 'react';

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
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
    console.log('FORM thisstate', this.state);
    console.log('form', this.props);
    e.preventDefault();
    this.props.onComplete(Object.assign({},this.state));
  }

  render(){
    return(
      <form className='category-form' onSubmit={this.handleSubmit}>
       This is category form
        <input
          type={this.props.buttonText === 'Delete Category'? 'hidden' : 'text'}
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type={this.props.buttonText === 'Delete Category'? 'hidden' : 'number'}
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
