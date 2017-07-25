import React from 'react';
import {connect} from 'react-redux';

import {
  budgetCategoryCreate,
  budgetCategoryUpdate,
  budgetCategoryDelete,
} from '../../action/budget-category-actions.js';

import BudgetForm from '../budget-form';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Budget Manager</h2>
        <BudgetForm
          submitText='Add Budget Category'
          handleSubmit={this.props.budgetCreate}
        />
        {this.props.budgetCategories.map(budgetCategory =>
          <div key={budgetCategory.id}>
            <h3>{budgetCategory.title}</h3>
            <h4>Budget: {budgetCategory.budget}</h4>
            <ul>
              {this.props.expenses.map(expense =>
                <li key={expense.id}>{expense.title}: ${expense.cost}</li>
              )}
            </ul>
            <BudgetForm
              submitText='Add Expense'
              handleSubmit={this.props.expenseCreate}
            />
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
