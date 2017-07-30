import React from 'react';
import {connect} from 'react-redux';

import Dropzone from '../dropzone';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import CategoryForm from '../category-form';

import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

import {
  expenseCreate,
  expenseDelete,
  expenseInsert,
} from '../../action/expense-action.js';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);

    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this);
  }

  handleDropzoneComplete(err, expense){
    if(err)
      return console.error(err);
    this.props.expenseDelete(expense);
    expense.categoryID = this.props.category.id;
    this.props.expenseInsert(expense);
  }

  render(){
    let {category, categoryUpdate, categoryDelete, expense} = this.props;
    return (
      <div className='category-item'>
        <Dropzone onComplete={this.handleDropzoneComplete}>
          <header>
            <div className='content'>
              <h3> {category.title}:    ${category.budget} </h3>
            </div>
            <div className='editing'>
              <CategoryForm
                buttonText='update'
                category={category}
                onComplete={categoryUpdate}
              />
              <button onClick={() => categoryDelete(category)}>
              delete
              </button>
            </div>
          </header>

          <main>
            <h3>Expense</h3>
            <ExpenseForm
              categoryID={category.id}
              buttonText='create expense'
              onComplete={this.props.expenseCreate}
            />

            <ul>
              {expense.map(expense =>
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
  expense: state.expense[props.category.id],
});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  expenseInsert: (expense) => dispatch(expenseInsert(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
