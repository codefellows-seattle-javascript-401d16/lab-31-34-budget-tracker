import React from 'react'
import { connect } from 'react-redux'

let renderIf = (t, c) => (t ? c : undefined)
let updateExpenseItem = false
class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.item.name,
      price: this.props.item.price,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdateCostItem = this.handleUpdateCostItem.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
    if (e.target.name == 'name') {
      this.props.item.name = e.target.value
      this.props.item.updated = new Date()
    }
    if (e.target.name == 'price') {
      this.props.item.price = e.target.value
      this.props.item.updated = new Date()
    }
  }

  handleUpdateCostItem() {
    updateExpenseItem = true
  }

  render() {
    return (
      <div onDoubleClick={this.handleUpdate}>
        {renderIf(
          updateExpenseItem,
          <div className="price-item-update">
            <input
              name="name"
              type="text"
              value={this.props.item.name}
              onChange={this.handleChange}
              onBlur={() => this.props.expenseUpdate(this.props.item)}
            />
            <input
              name="price"
              type="number"
              value={this.props.item.price}
              onChange={this.handleChange}
              onBlur={() => {
                this.props.expenseUpdate(this.props.item)
                updateExpenseItem = false
              }}
            />
          </div>
        )}

        {renderIf(
          !updateExpenseItem,
          <div key={this.props.item.id}>
            <h3>
              Expense Name:{this.props.item.name}
            </h3>
            <h3>
              Item price: {this.props.item.price}
            </h3>
            <h3>
              Last Updated: {this.props.item.timestamp.toString()}
            </h3>
            <button
              onClick={() => this.props.expenseDelete(this.props.item)}
              className="note-item-delete"
            >
              x
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default ExpenseItem
