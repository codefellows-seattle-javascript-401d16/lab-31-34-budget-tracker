import React from 'react';

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: props.category.id ? props.category.id : '',
      timestamp: '',
      name: props.category.name ? props.category.name : '',
      budget: props.category.budget ? props.category.budget : 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    console.log('form', this.props);
    if(props.category) this.setState(props.category);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    console.log('CAT FORM state:', this.state);
    console.log('CAT FORM props:', this.props);
    e.preventDefault();
    this.props.onComplete(Object.assign({},this.state));
    if(!this.props.category) this.setState({name: '', budget: ''});

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
