import React from 'react';
import {connect} from 'react-redux';

import {
  budgetCategoryCreate,
  budgetCategoryUpdate,
  budgetCategoryDelete,
} from '../../action/budget-category-actions.js';

import {
  expenseItemCreate,
  expenseItemInsert,
  expenseItemUpdate,
  expenseItemDelete,
} from '../../action/expenses-actions.js';

import Dropzone from '../dropzone';
import BudgetForm from '../budget-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import {log, logError} from '../../lib/util.js';

class BudgetCategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.budgetCategory ? this.props.budgetCategory : {
      editing: false,
      title: '',
      budget: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this);
  }

  handleDropzoneComplete(err, expense) {
    if(err)
      return logError(err);
    this.props.expenseDelete(expense);
    expense.categoryId = this.props.budgetCategory.id;
    this.props.expenseInsert(expense);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({ title: this.props.budgetCategory.title, budget: this.props.budgetCategory.budget, editing: false });
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.budgetUpdate(this.state);
    this.setState({ editing: false });
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.budgetDelete(this.state);
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
            name='budget'
            value={this.state.budget}
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
        <Dropzone onComplete={this.handleDropzoneComplete}>
          <div key={this.state.id}>
            <h3 onDoubleClick={() => this.setState({ editing: true })}>{this.state.title}: ${this.state.budget}<button onClick={() => this.props.budgetDelete(this.state)}>X</button></h3>
            <ul>
              {this.props.expenses.filter(expense =>
                expense.categoryId === this.state.id).map(expense =>
                <ExpenseItem expense={expense} key={expense.id} handleUpdate={this.props.expenseUpdate} handleDelete={this.props.expenseDelete} />
              )}
              <li>
                <ExpenseForm
                  handleSubmit={this.props.expenseCreate}
                  categoryId={this.state.id}
                />
              </li>
            </ul>
          </div>
        </Dropzone>
    );
  }
}

const mapStateToProps = state => {
  log(state);
  return {
    budgetCategories: state.budgetCategories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    budgetCreate: budgetCategory => dispatch(budgetCategoryCreate(budgetCategory)),
    budgetUpdate: budgetCategory => dispatch(budgetCategoryUpdate(budgetCategory)),
    budgetDelete: budgetCategory => dispatch(budgetCategoryDelete(budgetCategory)),
    expenseCreate: expense => dispatch(expenseItemCreate(expense)),
    expenseInsert: expense => dispatch(expenseItemInsert(expense)),
    expenseUpdate: expense => dispatch(expenseItemUpdate(expense)),
    expenseDelete: expense => dispatch(expenseItemDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetCategoryItem);
