import React from 'react'

let renderIf = (t, c) => (t ? c : undefined)

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
    })
    this.props.note.content = this.state.content
  }

  handleUpdate() {
    console.log('editing')
    this.setState({ editing: true })
  }

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
              onDoubleClick={() => this.props.categoryUpdate(this)}
            />
            <input
              name="budget"
              type="text"
              value={this.props.item.budget}
              onChange={this.handleChange}
              onDoubleClick={() => this.props.categoryUpdate(this.pops.item)}
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
