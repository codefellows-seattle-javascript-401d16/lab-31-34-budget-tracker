import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import DeleteButton from '../delete-button';
import CategoryForm from '../category-form';

import {
  budgetCreate,
  budgetUpdate,
  budgetDelete,
} from '../../actions/budget-category-actions.js';

import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../../actions/expense-actions.js';

class CategoryItem extends React.Component {
  render(){
    return(
      <div>
        <h3>{this.props.category.name}</h3>
        <h4>Budget: ${this.props.category.budget}</h4>
          <DeleteButton
            type='submit'
            submitText='Delete'
            onClick={this.props.budgetDelete}
            category={this.props.category} />
          <CategoryForm
            category={this.props.category}
            submitText='Update Budget Category'
            onComplete={this.props.budgetUpdate} />
          <ExpenseForm
              submitText='Create Expense'
              onComplete={this.props.expenseUpdate} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    budgetCreate: category => dispatch(budgetCreate(category)),
    budgetUpdate: category => dispatch(budgetUpdate(category)),
    budgetDelete: category => dispatch(budgetDelete(category)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
