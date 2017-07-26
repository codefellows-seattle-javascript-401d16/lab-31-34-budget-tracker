import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state  = props.Expense ? {...props.Expense} : {title: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillReceiveProps(props) {
    if (props.Expense)
      this.setState(props.Expense)
  }
  handleChange(e){
    this.setState({title: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete({...this.state})
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit} >
        <input
          name ='category'
          type='text'
          placeholder='expense category'
          value={this.state.expenseCategory}
          onChange={this.handleChange}
        />
        <input
          name ='price'
          type='number'
          placeholder='expense amount'
          value={this.state.expenseAmount}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonText} </button>
      </form>
    )
  }
}

export default ExpenseForm
