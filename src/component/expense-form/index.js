import './_expense-form.scss'
import React from 'react'

class ExpenseForm extends React.Component{
  constructor(props){
    super(props)
    this.state = props.expense ? {...props.expense} : {name: '', price: 0, categoryID: props.categoryID}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState(props.expense)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    // onComplete = this.props.expenseCreate
    this.props.onComplete({...this.state})
    // clear the form if it isn't being used to update
    if(!this.props.expense)
      this.setState({name: '', price: 0})
  }

  render(){
    return(
      <div>
        <h4 className='expense-title'> {this.props.buttonText} </h4>

        <form className='expense-form' onSubmit={this.handleSubmit} >
          <input
            name='name'
            type='text'
            placeholder='new expense'
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            name='price'
            type='number'
            value={this.state.price}
            onChange={this.handleChange}
          />

          <button type='submit'> {this.props.buttonText} </button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm
