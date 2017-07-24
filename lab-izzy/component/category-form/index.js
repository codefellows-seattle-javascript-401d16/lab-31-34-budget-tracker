import React from 'react';
import uuid from 'uuid';


class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }

  }
}
class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({title: e.target.value});
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
        <button type='submit'> {this.props.buttonName} </button>
      </form>
    );
  }
}

export default CategoryForm;
