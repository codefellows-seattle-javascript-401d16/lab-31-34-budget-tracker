import React from 'react'
import { connect } from 'react-redux'

let renderIf = (t, c) => (t ? c : undefined)

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      name: this.props.item.name,
      price: this.props.item.price,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
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

  handleUpdate() {
    this.setState({ editing: true })
  }

  handleBlur() {}

  render() {
    return (
      <div onDoubleClick={this.handleUpdate}>
        {renderIf(
          this.state.editing,
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
              onBlur={() => this.props.expenseUpdate(this.props.item)}
            />
          </div>
        )}

        {renderIf(
          !this.state.editing,
          <div key={this.props.item.id}>
            <h3>
              Item Name:{this.props.item.name}
            </h3>
            <h3>
              Item Budget: {this.props.item.price}
            </h3>
            <h3>
              Item id: {this.props.item.id}
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
