import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { props.expense
      ? {...props.expense}
      : {title: '', budgetID: props.budgetID}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState({...props.expense})
    if(props.budgetID)
      this.setState({...props.budgetID})
  }

  handleChange(e){
    this,setState({title: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    if(!this.props.expense)
      this.setState({title: ''})
  }

  render(){
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange{this.handleChange}
        />
        <button type='submit'>submit expense</button>
      </form>
    )
  }
}

export default expenseForm
