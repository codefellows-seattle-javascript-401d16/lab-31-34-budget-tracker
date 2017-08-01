import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import DeleteButton from '../delete-button';
import CategoryForm from '../category-form';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../actions/category-actions.js';

import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../../actions/expense-actions.js';

class CategoryItem extends React.Component {
  render(){

    let {category, categoryUpdate, categoryDelete, expenses, expenseCreate} = this.props;

    return(
      <div>
        <h3>{category.name}</h3>
        <h4>Budget: ${category.budget}</h4>
        <DeleteButton
          type='submit'
          submitText='Delete'
          onClick={categoryDelete}
          category={category} />
        <CategoryForm
          category={category}
          submitText='Update Budget Category'
          onComplete={categoryUpdate} />
        <ExpenseForm
          submitText='Create Expense'
          category={category}
          categoryID={category.id}
          onComplete={expenseCreate} />
        {expenses[category.id].map((expense) =>
          <div key={expense.id}>
            <ExpenseItem
              expense={expense} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
