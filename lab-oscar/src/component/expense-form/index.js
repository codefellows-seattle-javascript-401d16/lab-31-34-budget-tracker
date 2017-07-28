import React from 'react';
import './_expense-form.scss'

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
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
  if(!this.props.expense){
  this.setState({expenseName: '', price: ''})
  this.props.showExpenseForm()
  this.props.onComplete({...this.state})
  }
  if(this.props.expense){
    this.props.onComplete({...this.state})
    this.props.showExpensesFunc()
    this.props.showItemOpts()
  }
}


  render() {
    let {updateItemClass} = this.props
    return (
      <form className={updateItemClass ? updateItemClass : 'expense-form'} onSubmit={this.handleSubmit}>
        <input
          name='expenseName'
          type='text'
          placeholder='Expense'
          value={this.state.expenseName}
          onChange={this.handleChange}
        />
        <input
          name='price'
          type='text'
          placeholder='Price'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <img
          className={this.props.updateItemClass ? 'expense-update-submit-button' : 'expense-submit-button'}
          src='https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/plus-24.png'
          onClick={this.handleSubmit}
        />
        {/* <button type='submit'>{this.props.buttonText}</button> */}
      </form>
    )
  }
}

export default ExpenseForm;
