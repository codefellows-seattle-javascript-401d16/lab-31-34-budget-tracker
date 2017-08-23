import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.expense ? { ...props.expense } : { title: '' }
    // this.state = props.category ? {...props.category}:{expense:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // console.log('EXPENSE FORM',this.props.expense);
  }

  componentWillReceiveProps(props) {
    if (props.expense) this.setState(props.expense)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    // console.log('this.propsssss on expense FORM',this.props);
  }

  handleSubmit(e) {
    e.preventDefault()
    // console.log('this.props on handleSubmit!',this.state);
    // console.log(this.props);
    this.props.onComplete({ ...this.state })
    // if(!this.props.expense.categoryID)
    //   this.setState({categoryID:this.props.expense.categoryID})
    if (!this.props.expense) {
      this.setState({ title: '' })
      this.setState({ expense: '' })
    }
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        {/*}<input
      id='expense'
      name='expense'
      type='number'
      placeholder='expense'
      value={this.state.expense}
      onChange={this.handleChange}
      />*/}

        <button type="submit">
          {this.props.buttonText}
        </button>
      </form>
    )
  }
}

export default ExpenseForm
