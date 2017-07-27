import React from 'react';
import {connect} from 'react-redux';

import {
  budgetCreate as budgetActionCreate,
} from '../../action/budget-cat-actions.js';

import BudgetForm from '../budget-form';
import BudgetItem from '../budget-item';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Budget</h2>
        <BudgetForm
          submitText='Add Budget Category'
          onComplete={this.props.budgetCreate}
        />
        {this.props.budgets.map((item) =>
          <BudgetItem key={item.id} budget = {item} />
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    budgets: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    budgetCreate: (budget) => dispatch(budgetActionCreate(budget)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
