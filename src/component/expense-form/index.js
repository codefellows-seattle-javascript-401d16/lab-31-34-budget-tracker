import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.expense
      ? {...props.expense}
      : {cost: '', categoryID: props.categoryID}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState({...props.expense})
    if(props.categoryID)
      this.setState({categoryID: props.categoryID})
  }

  handleChange(e){
    this.setState({cost: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    if(!this.props.expense)
      this.setState({expense: ''})
  }

  render(){
    return(
      <form className='expense-form' onSubmit={this.handleSubmit} >
        <input
          name='cost'
          type='text'
          placeholder='cost'
          value={this.state.cost}
          onChange={this.handleChange} />

        <button type='submit'> {this.props.submitText} </button>
      </form>
    )
  }
}

export default ExpenseForm
