import React from 'react'

let renderIf = (t, c) => (t ? c : undefined)

class NoteItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
    })
    this.props.note.content = this.state.content
  }

  handleBlur(e) {
    this.setState(state => ({ editing: !state.editing }))
    this.handleUpdate(this.id)
  }

  handleDelete(e) {
    this.props.categoryDelete(this.id)
  }

  handleUpdate() {
    this.props.categoryUpdate(this.id)
  }

  render() {
    console.log('props', this.props.categories)
    return (
      <div onDoubleClick={this.handleUpdate}>
        {renderIf(
          this.state.editing,
          <div className="budget-item-update">
            <input
              name="update"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
          </div>
        )}

        {renderIf(
          !this.state.editing,
          <div>
            {this.props.categories.map(item =>
              <div key={item.id}>
                <h3>
                  {console.log(item.id)}
                  Item Name:{item.name}
                </h3>
                <h3>
                  Item Budget: {item.budget}
                </h3>
                <h3>
                  Item id: {item.id}
                </h3>
                <h3>
                  Last Updated: {item.timestamp.toString()}
                </h3>
                <button
                  onClick={this.handleDelete}
                  className="note-item-delete"
                >
                  x
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default NoteItem
