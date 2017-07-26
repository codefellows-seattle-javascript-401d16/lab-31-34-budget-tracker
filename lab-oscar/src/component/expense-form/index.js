import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    console.log('!!!!',props );
    this.state = {
      expenseName: props.expense ? props.expense.expenseName : '',
      price: props.expense ? props.expense.price : '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentWillReceiveProps(props){
     if(props.category)
       this.setState(props.category)
   }

handleChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit(e){
  e.preventDefault()
  this.props.onComplete({...this.state})
  if(!this.props.expense)
    this.setState({expenseName: '', price: ''})
}


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='expenseName'
          type='text'
          placeholder='Enter an Expense'
          value={this.state.expenseName}
          onChange={this.handleChange}
        />
        <input
          name='price'
          type='text'
          placeholder='Enter a Price'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm;
