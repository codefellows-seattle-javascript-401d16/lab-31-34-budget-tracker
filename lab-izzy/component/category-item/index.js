import React from 'react';
import {connect} from 'react-redux';

import Dropzone from '../dropzone';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';

import {
  expenseCreate,
  expenseInsert,
  expenseDelete,
} from '../../action/expense-actions.js';

import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);

    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this);
  }

  handleDropZoneComplete(err, expense){
    if (err)
      return console.error(err);

    this.props.expenseDelete(expense);
  }

  render(){
    let {category, categoryUpdate, categoryDelete, expenses} = this.props;
    return (
      <div className='category-item'>
        <Dropzone onComplete={this.handleDropzoneComplete} >
          <header>
            <div className='content'>
              <h2> {category.title} </h2>
              <button onClick={() => categoryDelete(category)}>
                delete
              </button>
            </div>
            <div className='editing'>
              <CategoryForm
                buttonName='update'
                category={category}
                onComplete={categoryUpdate}
              />
            </div>
          </header>
          <main>
            <ExpenseForm
              categoryID={category.id}
              buttonName='create expense'
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

const mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id],
});

const mapDispatchToProps = (dispatch) => ({
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  expenseInsert: (expense) => dispatch(expenseInsert(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
