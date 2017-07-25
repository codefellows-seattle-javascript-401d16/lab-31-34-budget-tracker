import React from 'react';
import {connect} from 'react-redux';

import {
  budgetCategoryCreate,
  budgetCategoryUpdate,
  budgetCategoryDelete,
} from '../../action/budget-category-actions.js';

import {
  expenseItemCreate,
  expenseItemUpdate,
  expenseItemDelete,
} from '../../action/expenses-actions.js';

import BudgetForm from '../budget-form';
import ExpenseForm from '../expense-form';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Budget Manager</h2>
        <BudgetForm handleSubmit={this.props.budgetCreate} />
        {this.props.budgetCategories.map(budgetCategory =>
          <div key={budgetCategory.id}>
            <h3>{budgetCategory.title}: ${budgetCategory.budget}</h3>
            <ul>
              {this.props.expenses.filter(expense => expense.categoryId === budgetCategory.id).map(expense => <li key={expense.id}>{expense.title}: ${expense.price}</li>)}
            </ul>
            <ExpenseForm
              handleSubmit={this.props.expenseCreate}
              categoryId={budgetCategory.id}
            />
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
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
    expenseUpdate: expense => dispatch(expenseItemUpdate(expense)),
    expenseDelete: expense => dispatch(expenseItemDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
