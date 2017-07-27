import React from 'react';
import CategoryForm from '../category-form';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleExpenseSubmit = this.handleExpenseSubmit.bind(this);
  }

  handleDoubleClick(evt) {
    evt.preventDefault();
    this.setState({
      editing: true,
    });
  }

  handleSubmit(category) {
    this.props.update({
      ...category,
      id: this.props.category.id,
    });
    this.setState({
      editing: false,
    });
  }

  handleDeleteClick() {
    console.log('hi');
    this.props.remove(this.props.category);
  }

  handleExpenseSubmit(expense) {
    this.props.addExpense({
      ...expense,
      categoryId: this.props.category.id,
    });
  }

  render() {
    const expenses = this.props.expenses;
    const total = expenses.reduce((sum, expense) => sum += expense.amount, 0);
    return (
      <div className='category-item'>
        {!this.state.editing &&
          <h2
            onDoubleClick={this.handleDoubleClick}
          >{this.props.category.name} -- ${total}</h2>
        }
        {this.state.editing &&
          <div>
            <CategoryForm
              buttonText='Update'
              onSubmit={this.handleSubmit}
              name={this.props.category.name}
            />
            <button
              onClick={this.handleDeleteClick}
            >
              Delete
            </button>
          </div>
        }
        <div className='expenses'>
          {expenses.map(expense => (
            <ExpenseItem
              key={expense.id.concat(expense.timestamp.valueOf())}
              expense={expense}
              update={(expense) => this.props.updateExpense({...expense, categoryId: this.props.category.id})}
              remove={this.props.deleteExpense}
            />
          ))}
          <ExpenseForm
            buttonText='Add Expense'
            onSubmit={this.handleExpenseSubmit}
          />
        </div>
      </div>
    );
  }
}
