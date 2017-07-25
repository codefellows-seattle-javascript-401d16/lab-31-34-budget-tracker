import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      budget: props.category ? props.category.budget : 0,
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
    if(!this.props.category)
      this.setState({title: '', budget: 0});
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='enter budget item'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          name='budget'
          type='number'
          placeholder='enter dollar amount'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default CategoryForm;
