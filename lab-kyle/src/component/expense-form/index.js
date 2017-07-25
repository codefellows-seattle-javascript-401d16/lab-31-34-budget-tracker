import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.expense
      ? { ...props.expense }
      : { name: '', price: 0, categoryID: props.categoryID }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props) {
    if (props.expense) this.setState(props.expense)
  }

  handleChange(e) {
    let { name, value, type } = e.target

    if (type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value),
        })
      } catch (err) {
        console.error(err)
      }
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('expense form state', this.state)
    this.props.onComplete({ ...this.state })
    if (!this.props.expense) this.setState({ name: '', price: 0 })
  }

  render() {
    return (
      <div className="expense-form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="price"
            type="number"
            placeholder="price"
            value={this.state.budget}
            onChange={this.handleChange}
          />
          <button type="submit">
            {this.props.buttonLabel}
          </button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm
