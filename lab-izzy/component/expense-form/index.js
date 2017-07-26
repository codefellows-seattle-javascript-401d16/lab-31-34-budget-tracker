import React from 'react';
import uuid from 'uuid';

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    console.log('yaaaas', props);
    if(props.expense)
      this.setState(props.expense);
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
    this.props.onComplete({...this.state});
    // clear the form if its not being used for update
    if(!this.props.expense)
      this.setState({name: '', price: 0});
  }

  render(){
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='expense name'
          value={this.state.name}
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
