import React from 'react';
import {connect} from 'react-redux';

import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';

import {expenseCreate} from '../../action/expense-actions.js';

import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

class CategoryItem extends React.Component{
  render(){
    let {category, categoryUpdate, categoryDelete, expenses} = this.props;
    return (
      <div className='category-item'>
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
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id],
});

const mapDispatchToProps = (dispatch) => ({
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
