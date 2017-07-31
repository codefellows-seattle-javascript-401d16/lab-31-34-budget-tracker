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
import ExpenseItem from '../expense-item';
import BudgetCategoryItem from '../budget-category-item';

import {log, logError} from '../../lib/util.js';


class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.budgetCreate({title: 'Food', budget: 200});
    this.props.budgetCreate({title: 'Housing', budget: 4000});
    this.props.budgetCreate({title: 'Car', budget: 2000});
    this.props.budgetCreate({title: 'Other', budget: 350});
  }

  render() {
    return (
      <main className='dashboard-container'>
        <BudgetForm handleSubmit={this.props.budgetCreate} />
        {this.props.budgetCategories.map(budgetCategory =>
          <BudgetCategoryItem
            key={budgetCategory.id}
            budgetCategory={budgetCategory}
          />
        )}
      </main>
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
    expenseUpdate: expense => dispatch(expenseItemUpdate(expense)),
    expenseDelete: expense => dispatch(expenseItemDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
