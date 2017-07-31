import React from 'react';
import '../../../style/main.scss';

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: props.category.id ? props.category.id : null,
      timestamp: null,
      name: props.category.name ? props.category.name : '',
      budget: props.category.budget ? props.category.budget : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('CAT FORM CONS props:', this.props);
  }

  componentWillReceiveProps(props){
    if(props.category) this.setState(props.category);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    console.log('CAT FORM state:', this.state);
    e.preventDefault();
    this.props.onComplete(Object.assign({},this.state));
    console.log('CAT FORM props:', this.props);
    if(!this.props.category) this.setState({name: '', budget: ''});

  }

  render(){
    return(
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='New Destination'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='budget'
          placeholder='New Budget'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button className='edit-button' type='submit'>{this.props.buttonText}</button>

      </form>
    );
  }
}

export default CategoryForm;
