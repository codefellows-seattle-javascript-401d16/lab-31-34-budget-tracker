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

class DashboardContainer extends React.Component {
//TODO: check the .id on the category, it's not populating to the DOM.

  render() {
    return(
      <main className='dashboard-container'>
        <h2> Budget Dashboard </h2>
        <CategoryForm
          submitText='Add Budget Category'
          onComplete={this.props.budgetCreate}
        />
      {this.props.categories.map((category) =>
          <div key={category.id}>
            <h3>{category.name}</h3>
            <h4>Budget: ${category.budget}</h4>
            <DeleteButton
              type='submit'
              submitText='Delete'
              onClick={this.props.budgetDelete}
              category={category} />
            <CategoryForm
              category={category}
              submitText='Update Budget Category'
              onComplete={this.props.budgetUpdate}
            />
            <ExpenseForm
                submitText='Create Expense'
                onComplete={this.props.expenseUpdate}
              />
          </div>
        )}
      </main>
    );
  }
}

//TODO: create a categoryForm for updating the category, underneath the category on line 26.

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

//TODO: What is the (DashboardContainer) doing here?
