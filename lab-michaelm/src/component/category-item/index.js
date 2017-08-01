import React from 'react';
import {connect} from 'react-redux';

import Dropzone from '../dropzone';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import CategoryForm from '../category-form';
import {logError} from '../../lib/util.js'; 

import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

import {
  expenseCreate,
  expenseInsert,
  expenseDelete,
} from '../../action/expense-actions.js';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);

    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this);
  }

  handleDropzoneComplete(err, expense){
    if (err)
      return logError(err);
    this.props.expenseDelete(expense);

    expense.categoryID = this.props.category.id;

    this.props.expenseInsert(expense);
  }

  render(){
    let {category, categoryUpdate, categoryDelete, expenses} = this.props;
    return (
      <div className='category-item'>
      <Dropzone onComplete={this.handleDropzoneComplete} >
        <header>
          <div className='name'>
            <h2> {category.name} </h2>
            <h3> {category.budget} </h3>
            <button onClick={() => categoryDelete(category)}>
              delete
            </button>
          </div>
          <div className='editing'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate}
              />
          </div>
        </header>

        <main>
          <ExpenseForm
            categoryID={category.id}
            buttonText='create expense'
            onComplete={this.props.expenseCreate}
            />

            <ul>
              {expenses.map(expense =>
                <ExpenseItem key={expense.id} expense={expense} />
              )}
            </ul>
        </main>
        </Dropzone>

      </div>
    );
  }
}

let mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id]
});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  expenseInsert: (expense) => dispatch(expenseInsert(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem);
