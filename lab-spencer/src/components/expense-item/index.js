import React from 'react';

import Draggable from '../draggable';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense ? this.props.expense : {
      editing: false,
      title: this.props.expense.title ? this.props.expense.title : '',
      price: this.props.expense.price ? this.props.expense.price : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({ title: this.props.expense.title, price: this.props.expense.price, editing: false });
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.handleUpdate(this.state);
    this.setState({ editing: false });
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.handleDelete(this.state);
  }

  render() {
    return (

      this.state.editing ?
        <li>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type='number'
            step='0.01'
            name='price'
            value={this.state.price}
            onChange={this.handleChange}
          />
          <button
            name='cancel'
            onClick={this.handleCancel}
          >Cancel</button>
          <button
            name='confirm-edit'
            onClick={this.handleUpdate}
          >Change</button>
        </li>
        :
        <Draggable dataTransferItem={this.state}>
          <li onDoubleClick={() => this.setState({ editing: true })}>
            {this.state.title}: ${this.state.price}<button onClick={this.handleDelete}>X</button>
          </li>
        </Draggable>
    );
  }
}

export default ExpenseItem;
