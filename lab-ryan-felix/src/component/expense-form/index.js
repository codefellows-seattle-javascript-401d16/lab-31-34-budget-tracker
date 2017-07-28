import React from 'react';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    const expense = props.expense || {};
    this.state = {
      nameInputValue: expense.name || '',
      amountInputValue: expense.amount || 0,
    };

    this.handleNameInputChange = this.handleNameInputChange.bind(this);
    this.handleAmountInputChange = this.handleAmountInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameInputChange(evt) {
    evt.preventDefault();
    this.setState({
      nameInputValue: evt.target.value,
    });
  }

  handleAmountInputChange(evt) {
    evt.preventDefault();
    this.setState({
      amountInputValue: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if(this.state.nameInputValue.length < 1) {
      return;
    }
    this.props.onSubmit({
      name: this.state.nameInputValue,
      amount: this.state.amountInputValue,
    });
    this.setState({
      nameInputValue: '',
      amountInputValue: 0,
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input
          name='expense-name'
          type='text'
          placeholder='Morning coffee, April rent...'
          value={this.state.nameInputValue}
          onChange={this.handleNameInputChange}
        />
        <input
          name='expense-amount'
          type='number'
          value={this.state.amountInputValue}
          onChange={this.handleAmountInputChange}
        />
        <button
          type='submit'
        >
          {this.props.buttonText || 'Submit'}
        </button>
      </form>
    );
  }
}
