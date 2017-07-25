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
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    budgetCategories: state,
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
