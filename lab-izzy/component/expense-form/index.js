import React from 'react';
import uuid from 'uuid';

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.expense ? props.expense.title : '',
      price: props.expense ? props.expense.price : 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    console.log('yaaaas', props);
    if(props.expense)
      this.setState(props.expense);
    if(props.categoryID)
      this.setState({categoryID: props.categoryID});
  }

  handleChange(e){
    this.setState({title: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete({...this.state});
    // clear the form if its not being used for update
    if(!this.props.expense)
      this.setState({title: '', price: 0});
  }

  render(){
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='expense name'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name='price'
          type='number'
          min='0'
          step='any'
          placeholder='expense amount'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonName} </button>
      </form>
    );
  }
}

export default ExpenseForm;
