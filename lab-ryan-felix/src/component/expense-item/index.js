import React from 'react';
import ExpenseForm from '../expense-form';

export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDoubleClick(evt) {
    console.log('hihi')
    evt.preventDefault();
    this.setState({
      editing: true,
    });
  }

  handleSubmit(expense) {
    this.props.update({
      ...expense,
      id: this.props.expense.id,
    });
    this.setState({
      editing: false,
    });
  }

  handleDelete(evt) {
    this.props.remove(this.props.expense);
  }

  render() {
    return (
      <div
        className='expense-item'
        onDoubleClick={this.handleDoubleClick}
      >
        {!this.state.editing &&
          <p>
            ${this.props.expense.amount} -- {this.props.expense.name}
          </p>
        }
        {this.state.editing &&
          <div>
            <ExpenseForm
              buttonText='Update'
              onSubmit={this.handleSubmit}
              expense={this.props.expense}
            />
            <button
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
        }
      </div>
    );
  }

}
