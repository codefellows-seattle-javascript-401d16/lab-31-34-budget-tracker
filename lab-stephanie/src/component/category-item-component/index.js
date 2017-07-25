import React from 'react'
import { connect } from 'react-redux'

let renderIf = (t, c) => (t ? c : undefined)

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      name: this.props.item.name,
      budget: this.props.item.budget,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
    if (e.target.name == 'name') return (this.props.item.name = e.target.value)
    if (e.target.name == 'budget') {
      this.props.item.budget = e.target.value
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
          <div className="budget-item-update">
            <input
              name="name"
              type="text"
              value={this.props.item.name}
              onChange={this.handleChange}
              onBlur={() => this.props.categoryUpdate(this.props.item)}
            />
            <input
              name="budget"
              type="text"
              value={this.props.item.budget}
              onChange={this.handleChange}
              onBlur={() => this.props.categoryUpdate(this.props.item)}
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
              Item Budget: {this.props.item.budget}
            </h3>
            <h3>
              Item id: {this.props.item.id}
            </h3>
            <h3>
              Last Updated: {this.props.item.timestamp.toString()}
            </h3>
            <button
              onClick={() => this.props.categoryDelete(this.props.item)}
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

export default CategoryItem
