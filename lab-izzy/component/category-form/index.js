import React from 'react';
import uuid from 'uuid';

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      budget: props.category ? props.category.budget : 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name, value, type} = e.target;
    if(type === 'number') {
      try{
        this.setState({
          [name]: Number(value),
        });
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render(){
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name='budget'
          type='number'
          min='0'
          step='any'
          placeholder='budget'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonName} </button>
      </form>
    );
  }
}

export default CategoryForm;
