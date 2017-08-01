import React from 'react';
import {connect} from 'react-redux';

import Dropzone from '../dropzone';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import DeleteButton from '../delete-button';
import CategoryForm from '../category-form';

import {
  categoryUpdate,
  categoryDelete,
} from '../../actions/category-actions.js';

import {
  expenseCreate,
  expenseInsert,
  expenseUpdate,
  expenseDelete,
} from '../../actions/expense-actions.js';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);

    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(err, expense){
    if(err) return console.error(err);

    this.props.expenseDelete(expense);
    expense.categoryID = this.props.category.id;
    this.props.expenseInsert(expense);
  }
  render(){

    let {category, categoryUpdate, categoryDelete, expenses, expenseCreate} = this.props;

    return(
      <Dropzone onComplete={this.handleDrop}>
        <div className='category-item'>
          <h3>{category.name}</h3>
          <h4>Budget: ${category.budget}</h4>
          <DeleteButton
            onClick={categoryDelete}
            submitText='delete'
            parentElement={category}
          />
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
      </Dropzone>
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
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
    expenseInsert: expense => dispatch(expenseInsert(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
